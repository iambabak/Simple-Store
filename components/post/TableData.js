import { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    maxWidth: 900,
    border: 'solid black',
    alignSelf: 'center',


  },
  row: {
    "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.background.default
        backgroundColor: 'gray'
}
  }
});

class TableData extends Component {
  render() {
    const { classes, product } = this.props;

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Table className={classes.table}>
          <TableBody>
              {product.data.map(el => (
                  <TableRow
                  className={classes.row}
                  //  key={row.id}
                >
                  <CustomTableCell style={{width:'50px',borderLeft: 'solid black'}} component="th" scope="row">
                    {el.title}
                  </CustomTableCell>
                  <CustomTableCell 
                  style={{textAlign:'right'}}
                   component="th" scope="row">
                    {el.value}
                  </CustomTableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
// export default TableData;
TableData.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableData);
