import React from 'react'; 
import ReactDOM from 'react-dom'
 export default class SystemFooter extends React.Component{

 		handlerAddClick(e){
            e.preventDefault();
            let item = {};
            let addForm = ReactDOM.findDOMNode(this.refs.addForm);
            let sex = addForm.querySelector('#staffAddSex');
            let id = addForm.querySelector('#staffAddId');
            item.name = addForm.querySelector('#staffAddName').value.trim();
		    item.age = addForm.querySelector('#staffAddAge').value.trim();
		    item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
		    item.sex = sex.options[sex.options.selectedIndex].value;
		    item.id = id.options[sex.options.selectedIndex].value;
		    /*表单验证*/
		    if(item.name =='' || item.age== '' || item.sex =='' || item.descrip =='' || item.id ==''){
		    	let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone)
		    	tips.style.display = 'block';
		    	setTimeout(function(){
		    		tips.style.dispaly = 'block';
		    	}, 1000);
		    	return
		   }
		    let numReg = /^\d+$/;
		    if(!numReg.test(item.age) ||  parseInt(item.age)>150){
		    	 let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
	            tips.style.display = 'block';
	            setTimeout(function(){
	                tips.style.display = 'none';
	            }, 1000);
	            return;
		    }
		    this.props.addStaffItem(item);
		    addForm.reset();
		       let tips = ReactDOM.findDOMNode(this.refs.tips);
	           tips.style.display = 'block';
	           setTimeout(function(){
	            tips.style.display = 'none';
	        }, 1000);
	        } 
 	render(){
 		return(
 			<div>
 				<h>人员新增</h>
 				<hr/>
 				<form ref = 'addForm'>
	 				  <p>
	 				  	 <label htmlFor='staffAddName'>姓名</label>
	 				  	 <input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
	 				  </p>
	 				   <p>
	 				  	 <label htmlFor='staffAddAge'>年龄</label>
	 				 	 <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Name'/>
	 				  </p>
	 				   <p>
	 				  	 <label htmlFor='staffAddName'>性别</label>
	 				 	 <select ref='addSex' id='staffAddSex'>
		                    <option value='男'>男</option>
		                    <option value='女'>女</option>
	                 	 </select>
	 				  </p>
	 				  <p>
	 				  	  <label htmlFor='staffAddId' style={{'display': 'block'}}>身份</label>
		                  <select ref='addId' id='staffAddId'>
		                    <option value='主任'>主任</option>
		                    <option value='老师'>老师</option>
		                    <option value='学生'>学生</option>
		                    <option value='实习'>实习</option>
		                  </select>
	 				  </p>
	 				  <p>
		                  <label htmlFor='staffAddDescrip'>个人描述</label>
		                  <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                	  </p>
                	  <p ref="tips"  style = {{'display':'none'}} >提交成功</p>
              		  <p ref='tipsUnDone'  style = {{'display':'none'}} >请录入完整的人员信息</p>
               		  <p ref='tipsUnAge'  style = {{'display':'none'}} >请录入正确的年龄</p>
                <div>
                      <button onClick = {this.handlerAddClick.bind(this)}>提交</button>
                </div>
 				</form>
 			</div>
 			)
 	}
 }