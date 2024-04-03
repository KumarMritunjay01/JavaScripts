const button = document.querySelectorAll('.button')
// console.log(button)

const body = document.querySelector('body')

button.forEach(function (button){
    console.log(button)
    // event Listener
    button.addEventListener('click', function(e){   // click any button e call
        console.log(e)
        console.log(e.target)   // kaha se event aa rha h
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor = "grey";
                break;
            
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            
                case "purple":
                    body.style.backgroundColor = e.target.id;
                    break;

            default:
                console.log("Plese select right button")
        }
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = 'grey'
        // }
    })
})