class myElement extends HTMLElement {

    constructor (){
      super();   

      this.attachShadow({mode :"open"})  
            
       
    }

    getStyles(){
      return `
        <style>
          :host{
              --primary-color:blueviolet;
              --secondary-color:cadetblue;
              --heading-primary:40px;
              --heading-secondary:30px;
              display:inline-block;
              width:100%;
              min-width:300px;
              max-width:450px;
            }
            section{
                background-color: var(--primary-color);              
            }
            section div{
              background: var(--secondary-color);

            }
            h1{
               font-size:var(--heading-primary);
            }
            p{
               font-size:var(--heading-secondary);
            }
        </style> 


      `;
    }

    getTemplate(){
      const template = document.createElement("template")

      template.innerHTML = `
      
       <section>
         <h1>
          <slot name="title"></slot>
         </h1>       
         <div>
            <p>
             <slot name="paragraph"></slot>
            </p>
         </div>

       </section> 
       ${this.getStyles()}
            
           
           
      `;

      return template;



    }

    

    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))

    }

    connectedCallback() {

       this.render() 
    }


}

customElements.define('my-element',myElement);