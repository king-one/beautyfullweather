class SystemItem{
	constructor(item){
		this.info = {},
		this.info.name = item.name;
		this.info.age = item.age || 0;
		this.info.sex = item.sex;
		this.info.id = item.id;
		this.info.descrip = item.id;
		this.key = ++SystemItem.key;
	}
}
SystemItem.key = 0;
export default class Staff{
	constructor(){
		this.allStaff = [
			new SystemItem(Staff.rawData[0]),
			new SystemItem(Staff.rawData[1]),
			new SystemItem(Staff.rawData[2]),
			new SystemItem(Staff.rawData[3]),
			new SystemItem(Staff.rawData[4]),
			new SystemItem(Staff.rawData[5]),
			new SystemItem(Staff.rawData[6]),
			new SystemItem(Staff.rawData[7]),
			new SystemItem(Staff.rawData[8]),
			new SystemItem(Staff.rawData[9]),
			new SystemItem(Staff.rawData[10]),
		];
		this.staff = [];
		this.sortType = 0;
		this.filtType = 0;
		this.word = '';
		this._sortStaff(this.sortType);
		this._filtStaff(this.filtType);
	}
	/*+*/
	addSystemItem(item){
		let newItem = new SystemItem(item);
		this.allStaff.push(newItem);
		this._sortStaff(this.sortType);
		this._filtStaff(this.filtType);
		this._searchStaff(this.word);
		return this;
	}
	/*-*/
	removeStaffItem(key){
	    let newStaff = this.allStaff.filter(item => {
		    return item.key != key;
		});
		this.allStaff = newStaff;
		//筛选 搜多过滤
		this._filtStaff(this.filtType);
		this._searchStaff(this.word);
		return this;
	}
	//改
	editStaffItem(item) {
	    this.allStaff.forEach(systemItem => {
		    if(systemItem.key == item.key) {
				systemItem.info.name = item.name;
				systemItem.info.sex = item.sex;
				systemItem.info.age = item.age;
				systemItem.info.id = item.id;
				systemItem.info.descrip = item.descrip;			
			}
		});
		this._sortStaff(this.sortType);
		this._filtStaff(this.filtType);
		this._searchStaff(this.word);
		return this;
	}
//改
	editStaffItem(item) {
	    this.allStaff.forEach(systemItem => {
		    if(systemItem.key == item.key) {
				systemItem.info.name = item.name;
				systemItem.info.sex = item.sex;
				systemItem.info.age = item.age;
				systemItem.info.id = item.id;
				systemItem.info.descrip = item.descrip;			
			}
		});
		this._sortStaff(this.sortType);
		this._filtStaff(this.filtType);
		this._searchStaff(this.word);
		return this;
	}
	
	//筛选
	_filtStaff(filtType){
	    this.filtType = filtType;
	    switch(parseInt(filtType)){
		    case 0: 
			    this.staff = this.allStaff;
				break;
			case 1: 
			    this.staff = this.allStaff.filter(item => {
				    return item.info.id == '主任';
				});
				break;
			case 2: 
			    this.staff = this.allStaff.filter(item => {
				    return item.info.id == '老师';
				});
				break;
			case 3: 
			    this.staff = this.allStaff.filter(item => {
				    return item.info.id == '学生';
				});
				break;
			case 4: 
			    this.staff = this.allStaff.filter(item => {
				    return item.info.id == '实习';
				});
				break;
			default: break;
		}
	}
	
	//排序
	_sortStaff(sortType) {
	    this.sortType = sortType;
	    switch(parseInt(sortType)){
		    case 0: //身份
			    this.allStaff.forEach(item => {
				    switch(item.info.id) {
					  case '主任':
					      item.info.id = 1; break;
					  case '老师':
					      item.info.id = 2; break;	
					  case '学生':
					      item.info.id = 3; break;	
					  case '实习':
					      item.info.id = 4; break;
                      default: break;						  
					}
				});
				this.allStaff.sort(function(item1, item2){
				    if(item1.info.id < item2.info.id)
					    return -1;
					else if (item1.info.id > item2.info.id)
					    return 1;
					else 
					    return 0;
				});
			    this.allStaff.forEach(item => {
				    switch(item.info.id) {
					  case 1:
					      item.info.id = '主任'; break;
					  case 2:
					      item.info.id = '老师'; break;	
					  case 3:
					      item.info.id = '学生'; break;	
					  case 4:
					      item.info.id = '实习'; break;
                      default: break;						  
					}
				});
			    break;
			case 1: //年龄升
			    this.allStaff.sort(function(item1, item2){
				    if(item1.info.age < item2.info.age)
					    return -1;
					else if (item1.info.age > item2.info.age)
					    return 1;
					else 
					    return 0;
				});
				break;
			case 2: //年龄降
			    this.allStaff.sort(function(item1, item2){
				    if(item1.info.age < item2.info.age)
					    return 1;
					else if (item1.info.age > item2.info.age)
					    return -1;
					else 
					    return 0;
				});
				break;
			default: break;
		}
	}
	
	//搜索
	_searchStaff(word){
	    this.word = word;
	    //在staff中搜索
	    this.staff = this.staff.filter(item => {
		    return item.info.name.indexOf(word)!=-1 || 
			       (item.info.age+'').indexOf(word)!=-1 || 
				   item.info.id.indexOf(word)!=-1 ||
				   item.info.sex.indexOf(word)!=-1;
		});
	}
	
	filtStaff(filtType){
	    this._filtStaff(filtType);
		this._searchStaff(this.word);
		return this;
	}
	sortStaff(sortType){
	    this._sortStaff(sortType);
		this._filtStaff(this.filtType);
		this._searchStaff(this.word);
		return this;
	}
	searchStaff(word){
	    this._filtStaff(this.filtType);
	    this._searchStaff(word);
		return this;
	}
} 
//模拟数据库
Staff.rawData = [{ descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'},
				 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'},
				 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'},
				 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'},
				 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'},
				 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'},
                 { descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'},
				 { descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'},
				 { descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'},
				 { descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}];