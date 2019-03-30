import { Component} from 'react'
import { connect } from "react-redux";
import * as actionTypes from '../actions/actionTypes'
import Router from "next/router";
import Divider from '@material-ui/core/Divider';


class CheckBoxFilter extends Component {
    constructor() {
        super();
        this.state = {
        };
      }
      async handleChange(slug, choice_slug){
          console.log('slug, choice_slug',slug, choice_slug)
          const filterURL = slug+'='+choice_slug
          console.log('filterURL',filterURL)
          const { dispatch} = this.props
          console.log('before',this.props.data)
          await dispatch({ type: actionTypes.ADD_FILTER, slug:slug, choice_slug:choice_slug })
          // if(this.props.data.length)
          // await dispatch({ type: actionTypes.ADD_FILTER, data: this.props.data+'&'+filterURL })
          // else
          // await dispatch({ type: actionTypes.ADD_FILTER, data: this.props.data+filterURL })
          // setInterval(console.log('after'),10000)
          console.log('this.props.data',this.props.data)
          console.log('Router.pathname',Router.pathname)
          console.log('Router.aspath',Router.asPath)
          console.log('Router.query',Router.query)
          const fil1 = 'field_2MHtJadKP'
          const res1 = 'choice_nsbqweed8ys1'
          const fil2 = 'field_2MHtJcq4KP'
          const res2 = 'choice_nscxvbed8ys1'
          let combineFilter = ''
          this.props.data.map(el => (
            combineFilter = combineFilter + '&'+el.slug + '=' + el.choice_slug
          ))
          console.log('combineFilter',combineFilter)
          // Router.push( `${Router.pathname}?address=${Router.query.address}&filter=${this.props.data}`,`${Router.asPath}/${this.props.data}`  )
          // Router.push( `${Router.pathname}?address=${Router.query.address}&${fil1}=${res1}&${fil2}=${res2}`,`${Router.pathname}?address=${Router.query.address}&${fil1}=${res1}&${fil2}=${res2}`  )
          Router.push( `${Router.pathname}?address=${Router.query.address}${combineFilter}`,`${Router.pathname}?address=${Router.query.address}${combineFilter}`  )

          //   Router.push(`/category/digital/${filterURL}`)

      }
      render() {
        const {filter} = this.props
        return (
          <div>
                {/* <h1>{filter.title}</h1> */}
                {filter.choice_items.map(el => (
                    <div>
                    <Divider component="li" />
                    <input type="checkbox" name="sss" value="later" onChange={()=>this.handleChange(filter.slug, el.slug)} /> {el.title}
                    </div>
                ))}
                
          </div>
        );
      }
}
const mapStateToProps = state => {
    return {
      data: state.setFilterReducer.data
    };
  };
  
  export default connect(mapStateToProps)(CheckBoxFilter);