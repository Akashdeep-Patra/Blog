import{d as t,e,f as s,g as i}from"./p-6b891a11.js";class a{constructor(s){t(this,s),this.text="World",this.name="Name",this.state=!1,this.isActive=!1,this.internalState=!0,this.active=e(this,"active",7)}updateStatement(){this.isActive=!this.isActive}activeStateHandler(t){}handleClick(){}async getState(){return this.state=!0,!0}getTheState(){return this.isActive}showMessage(){this.messageDiv.style.display="block"}componentDidLoad(){}render(){return s("div",null,s("h1",null,"Hello ",this.text))}get messageDiv(){return i(this)}static get style(){return""}}export{a as sample_component};