// this code will be executed after page load
(function() {
    console.log('after.js executed');
    // $.get('/modal.html')
    // const content = document.get('/modal.html')
    // document.body.append(content)




  })();



// Doesn't do what I wanted.
// function CreateModal(){
//     console.log('after.js executed');
//     var html = [
// //you can change code to your html for creating you can use [this site][1]

//             '<div class="modal fade" id="myModal" role="dialog">',
//             '    <div class="modal-dialog">',
//             '        <div class="modal-content" id="Main-Modal">',
//             '            <div class="modal-header" style="padding:35px 50px;text-align: center; font-size: 30px;">',
//             '                <h4>برای دیدن پروفایل کامل وارد شوید یا ثبت نام کنید</h4>',
//             '            </div>',
//             '            <div class="modal-body" style="padding:40px 50px;">',
//             '                <h3><strong>ورود به شهوانی</strong></h3>',
//             '                <br>',
//             '                <input type="hidden" name="csrfmiddlewaretoken" value="4gGY6LdmQsOvV6X2U20RnaOZ1v0nwXGI">',
//             '                <p>',
//             '                    <label for="id_username">نام کاربری:</label>',
//             '                    <input id="id_username" maxlength="254" name="username" type="text">',
//             '                </p>',
//             '                <p>',
//             '                    <label for="id_password">گذرواژه:</label>',
//             '                    <input id="id_password" name="password" type="password">',
//             '                </p>',
//             '                <input class="btn btn-lg btn-danger" type="button" onclick="SendToHost()" value="ورود">',
//             '                <input type="hidden" name="next" value="">',
//             '                <p>پسوردتان را فراموش کرده اید؟ <a href="/accounts/password/reset/">بازنشانی کنید</a></p>',
//             '                <p>عضو نیستید؟ <a href="/accounts/register/">ثبت نام کنید</a>!</p>',
//             '            </div>',
//             '        </div>',
//             '    </div>',
//             '</div>',


//         ].join("\n");
//     document.body.append(html)
//     // $("body").append(html);
// //here you force modal to be open
//     $("#myModal").modal({"backdrop": "static"});
// }


