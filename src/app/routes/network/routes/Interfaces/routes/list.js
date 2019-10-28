import React from "react";
import CardBox from "components/CardBox/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Redirect } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import { INTERFACE_PAGE_LOADED } from "constants/actionTypes";
import agent from "agent";
import { connect } from "react-redux";

// function createData(
//   status,
//   name,
//   members,
//   ipNetMask,
//   type,
//   access,
//   virtualDomain,
//   ref
// ) {
//   return { status, name, members, ipNetMask, type, access, virtualDomain, ref };
// }

const columns = [
  `Status`,
  `Name`,
  `Members`,
  `IP/Netmask`,
  `Type`,
  `Access`,
  `Virtual Domain`,
  `Ref.`
];

// const data = [
//   createData(
//     undefined,
//     `internal`,
//     undefined,
//     `0.0.0.0 0.0.0.0`,
//     `Hardware Switch`,
//     `PING HTTPS SSH HTTP`,
//     `root`,
//     `0`
//   ),
//   createData(
//     `up`,
//     `wan1`,
//     undefined,
//     `0.0.0.0 0.0.0.0`,
//     `Physical Interface`,
//     `PING HTTPS SSH HTTP Telnet`,
//     `root`,
//     `0`
//   )
// ];

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: INTERFACE_PAGE_LOADED, payload })
});

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDownOpen: false,
      toEdit: false
    };
  }

  componentWillMount() {
    this.props.onLoad(agent.Interfaces.all());
  }

  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    });
  };

  handleClick = () => {
    this.setState({
      toEdit: true
    });
  };

  render() {
    if (this.state.toEdit === true) {
      return <Redirect to="/app/network/interfaces/edit" />;
    }

    let interfaces = this.props.interfaceList.interfaces;

    return (
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="row mb-md-3">
          <CardBox styleName="col-12" cardStyle="p-0" heading="" headerOutside>
            <ButtonGroup>
              <ButtonDropdown
                isOpen={this.state.dropDownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle
                  className="jr-btn border-0 no-shadow bg-white text-black"
                  caret
                >
                  <i className="zmdi zmdi-plus zmdi-hc-fw" />
                  <span>Create New</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.handleClick}>
                    <IntlMessages id="app.network.interfaces.list.interface" />
                  </DropdownItem>
                  <DropdownItem>Virtual Wire Pair</DropdownItem>
                  <DropdownItem>VDOM Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button className="jr-btn bg-white text-black">
                <i className="zmdi zmdi-edit zmdi-hc-fw" />
                <span>Edit</span>
              </Button>
              <Button className="jr-btn bg-white text-black">
                <i className="zmdi zmdi-delete zmdi-hc-fw" />
                <span>Delete</span>
              </Button>
            </ButtonGroup>
            <div className="table-responsive-material">
              <Table>
                <TableHead>
                  <TableRow>
                    {columns &&
                      columns.map((column, index) => (
                        <TableCell
                          key={column}
                          align={index !== 0 ? "center" : "left"}
                        >
                          {column}
                        </TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {interfaces ? (
                    interfaces.map((d, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            {d.status === "up" ? (
                              <Avatar className="bg-success size-20">
                                <i className="zmdi zmdi-long-arrow-up text-white" />
                              </Avatar>
                            ) : (
                              <Avatar className="bg-danger size-20">
                                <i className="zmdi zmdi-long-arrow-down text-white" />
                              </Avatar>
                            )}
                          </TableCell>
                          <TableCell align="left">{d.name}</TableCell>
                          <TableCell align="left">{d.members}</TableCell>
                          <TableCell align="left">{d.ipNetMask}</TableCell>
                          <TableCell align="left">{d.type}</TableCell>
                          <TableCell align="left">{d.access}</TableCell>
                          <TableCell align="left">{d.virtualDomain}</TableCell>
                          <TableCell align="left">{d.ref}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow />
                  )}
                </TableBody>
              </Table>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
