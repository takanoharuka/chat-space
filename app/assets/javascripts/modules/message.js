$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message_box" data-message-id=${message.id}>
          <div class="message_info">
            <div class="message_info__username">
              ${message.user_name}
            </div>
            <div class="message_info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message_box" data-message-id=${message.id}>
        <div class="message_info">
          <div class="message_info__username">
            ${message.user_name}
          </div>
          <div class="message_info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat_main__message').append(html);
      $('form')[0].reset();
      $('.chat_main__message').animate({ scrollTop: $('.chat_main__message')[0].scrollHeight});
      $('.submit_btn').prop('disabled',false);
    })
    .fail(function(){
        alert('メッセージ送信に失敗しました');
        $('.Form__submit').prop("disabled", false);
    });
  });
});
