$(document).ready(function(){
  $('.button').click(function(){
    console.log("click")
    let firstname = $('#firstname').val()
    let lastname = $('#lastname').val()
    let age = $('#age').val()
    let language = $('#language').val()
  $('#makers').append(`<li>Hola soy ${firstname} ${lastname} tengo ${age} y mi lenguaje favorito es ${language}</li>`)
  })

  $('#maker-form').submit(function(e){
    e.preventDefault()
    console.log("submit")
    let firstname = $('#firstname').val()
    let lastname = $('#lastname').val()
    let age = $('#age').val()
    let language = $('#language').val()
      if(age > 18){
        $('#makers').append(`<li>Hola soy ${firstname} ${lastname} tengo ${age} y mi lenguaje favorito es ${language}</li>`)
      }else{
        alert(`La edad debería ser mayor a 18 años y tú tienes ${age} años`)
    }
  })
})
