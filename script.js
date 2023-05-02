//  https://script.google.com/macros/s/AKfycbwoCYeOTJo1VZBcgTmskBdJiqtIIzjMXVDTiuauggvEvb6kUKlLLl0XPtj0tUckMcWw9Q/exec
$("#form-submit").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwoCYeOTJo1VZBcgTmskBdJiqtIIzjMXVDTiuauggvEvb6kUKlLLl0XPtj0tUckMcWw9Q/exec",
        data:$("#form-submit").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})