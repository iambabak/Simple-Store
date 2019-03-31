import { Component} from 'react'
import logo from './logo.png'
import StarRating from '../general/StarRating'
import Divider from '@material-ui/core/Divider';

class EachComment extends Component{
    render(){
        const {comment} = this.props;
        return(
            <div>
            <Divider />

            <div style={{display:'flex',flexDirection: 'row',justifyContent: 'space-between', margin:'10px 0px'}}> 
                <div style={{display: 'flex',flexDirection: 'row'}}>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div style={{marginRight:'10px'}}>
                    <div>{comment.user.first_name}بلا:</div>
                    <div>{comment.comment}2</div>
                </div>
                </div>
                <div><StarRating rating={comment.rate}/></div>
                {console.log('commentcomment',comment)}
            </div>
                  <Divider />
                  </div>

        )
    }
}
export default EachComment;