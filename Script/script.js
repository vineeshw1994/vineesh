  

      const scriptURL = 'https://script.google.com/macros/s/AKfycbxrCio7BPNFxN0KgXzXI2-bWix5d4ZlMGHyGst_F-_HqMxpbQTI1DwxFy2iixLYd6fJeg/exec'
      const form = document.forms['submit-to-google-sheet']
      let frm = document.getElementsByName('submit-to-google-sheet')[0];
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', mode:"no-cors", body: new FormData(form)})
        .then(response => frm.reset(),
           
                  )
          .catch(error => console.error('Error!', error.message))

 
      })



 //google sheet link
  //https://script.google.com/macros/s/AKfycbxrCio7BPNFxN0KgXzXI2-bWix5d4ZlMGHyGst_F-_HqMxpbQTI1DwxFy2iixLYd6fJeg/exec