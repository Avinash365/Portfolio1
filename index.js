
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tap-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tap");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tap");
        }

        var sidemenu = document.getElementById("sidemenu"); 
        function openmenu(){
            sidemenu.style.right="0";
        } 
        function closemenu(){
            sidemenu.style.right="-200px"; 
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwhUEsEjil2sLShyeBPFpzwPJFByIz5KVKIob-5tQL_iziIgrPpE-Bo2Un4AmWZwbw/exec'
        const form = document.forms['submit-to-google-sheet'] 
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
