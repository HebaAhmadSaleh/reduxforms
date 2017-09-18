import React,{Component} from 'react'


const styles = {
                    btn:{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: '#00aaff',
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        cursor: 'pointer',
                        textDecoration:'none',
                        borderWidth:0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    },
                    clickedbtn:{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: '#aa00aa',
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        cursor: 'pointer',
                        textDecoration:'none',
                        borderWidth:0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }
                }
export default class FloatingBtn extends Component {
    constructor(props){
        super(props);
        this.state={
            bgColor:false
        }
    }


    btnClicked = (e) => {
        this.setState({bgColor:!this.state.bgColor});
        //console.log(e);
        this.props.openAddModal();
    }

    render(){
        return(
            <a href = "#" onClick={this.btnClicked}
            style={this.state.bgColor ? styles.clickedbtn : styles.btn}>
            <span style={{color:'white',fontSize:20,fontWeight:'bold',verticalAlign:'middle'}}>
            {this.props.children}
            </span></a>
        )
    }
}