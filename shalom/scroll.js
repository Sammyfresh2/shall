
   var typing=new Typed(".subtitle-typed", {
       strings: ["", "Travelpreneur", "Financial Consultant", "Performance Coach", "Novelty Seeker"],
       typeSpeed: 100,
       backSpeed: 40,
       loop: true,
   });

// onScroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const animateScroll = document.querySelectorAll('.hidden')

animateScroll.forEach((el)=> observer.observe(el));

// counters

const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')

        const count = +counter.innerHTML;


        const inc = target / speed;

        if(count < target){
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        }else{
            count.innerHTML = target
        }
    }

    updateCount()
})





