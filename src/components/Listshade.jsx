import React, { Component } from 'react';
import './Manpower.css';
import { Input, Icon, Table, Button } from 'antd';
const Search = Input.Search;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
class Listshade extends Component {
	state = {
      	userName: '',
      	selectedRowKeys: [], // Check here to configure the default column
	    loading: false,
    }
	showConList=() => {
		this.refs.covList.style.display = "block";
		this.refs.conList.style.display = "block";
	}
	closeConList=() => {
	    this.refs.covList.style.display = "none";
	    this.refs.conList.style.display = "none";
	}
	enterData=() => {
	    this.refs.covList.style.display = "none";
	    this.refs.conList.style.display = "none";
	    console.log(this.state.userName)
	}
	start = () => {
	    this.setState({ loading: true });
	    // ajax request after empty completing
	    setTimeout(() => {
	      this.setState({
	        selectedRowKeys: [],
	        loading: false,
	      });
	    }, 1000);
	}
	onSelectChange = (selectedRowKeys) => {
	    console.log('selectedRowKeys changed: ', selectedRowKeys);
	    this.setState({ selectedRowKeys });
	}
	change=(e) =>{
      console.log(e)
    }
    rowClick=(record, index) =>{
    	console.log(record.name);
    	//console.log(index)
    	this.setState({
		  userName: record.name
		})
		//console.log(this.state.userName)
    }
    emitEmpty = () => {
	    this.userNameInput.focus();
	    this.setState({ userName: '' });
	}
    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const { loading, selectedRowKeys } = this.state;
	    /*const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
	    rowSelection={rowSelection}
	    */
	    const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="Listshade">
                <div id="covList"  ref="covList"></div>
			    <div id = "conList" ref="conList">
		            <div className="listHeader">可搜索的列表</div>
                    <div className="listContent">
                        <div className="listContentT">
                          	<Search
						      placeholder=""
						      onSearch={value => console.log(value)}
						      enterButton
						    />
                        </div>
                        <div className="listContentB">
                        	<Table  
                        		columns={columns} 
                        		dataSource={data} 
                        		onRowClick={this.rowClick}
                        	/>
                        </div>
                    </div>
                    <div className="listFooter">
                      <button onClick = {this.closeConList}>关闭</button>
                      <button onClick = {this.enterData}>确定</button>
                    </div>
			    </div>
				<button onClick = {this.showConList}  className="openTree">列表遮罩</button>
				<Input
                  placeholder="请输入"
                  suffix={suffix}
                  value={userName}
                  ref={node => this.userNameInput = node}
                  className="nodeInput"
                  onChange = {this.change}
                  readOnly="readonly"
                />
            </div>
        );
    }
}
export default Listshade;