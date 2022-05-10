class myElement extends HTMLElement {
    constructor (){
        super();   
        this.attachShadow({mode :"open"})  ;
            
       
    }

    getTemplate(){
      const template = document.createElement('template')

      template.innerHTML = `
      
       <section>
         <h2>estudiando el curso de web components</h2>
         <div>
          <p>soy otro texto de ejemplo</p>
        </div>      
       </section> 
       ${this.getStyles()}
            
           
           
      `;

      return template;



    }

    getStyles(){
      return `
        <style>
          h2{
            color:red;
          }
        </style> 


      `;
    }

    render(){
      this.appendChild(this.getTemplate().content.cloneNode(true))

    }

    connectedCallback() {

       this.render() 
    }


}

customElements.define('my-element',myElement);