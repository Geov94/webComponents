class myElement extends HTMLElement {

    constructor (){
      super();   

      this.attachShadow({mode :"open"})  
            
       
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

    getStyles() {
      return `
        <style>
          :host {
            display: inline-block;
            width: 100%;
            min-width: 300px;
            max-width: 450px;
            font-size: 20px;
            background: grey;
          }
          :host(.aqua){
            background:aqua;

          }
          :host([chartreuse]){
            background: chartreuse;
          }
          :host([chartreuse]) h1{
            color:white;
          }
          :host([chartreuse]) p{
            color:violet;
          }
          
          :host-context(article.card) {
            display:block;
            max-width:100%;
            background:darksalmon;

          }         
        </style>
      `;
    }

    

    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))

    }

    connectedCallback() {

       this.render() 
    }


}

customElements.define('my-element',myElement);