import React, { Component } from 'react';
import './Manpower.css';
class Treelist extends Component {
	state = {
      	userName: '',
    }
	showConTrli=() => {
		this.refs.covTrli.style.display = "block";
		this.refs.conTrli.style.display = "block";
	}
	closeConTrli=() => {
	    this.refs.covTrli.style.display = "none";
	    this.refs.conTrli.style.display = "none";
	}
    render() {
        return (
            <div className="Treelist">
                <div id="covTrli"  ref="covTrli"></div>
			    <div id = "conTrli" ref="conTrli">
		            <div className="trliHeader">左树右表</div>
                    <div className="trliContent">
                    </div>
                    <div className="trliFooter">
                      <button onClick = {this.closeConTrli}>关闭</button>
                    </div>
			    </div>
				<button onClick = {this.showConTrli}  className="openTree">左树右表</button>
            </div>
        );
    }
}
export default Treelist;