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
import { NavLink } from "react-router-dom";
import IntlMessages from "util/IntlMessages";

function createData(
  status,
  name,
  members,
  ipNetMask,
  type,
  access,
  virtualDomain,
  ref
) {
  return { status, name, members, ipNetMask, type, access, virtualDomain, ref };
}

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

const data = [
  createData(
    undefined,
    `internal`,
    undefined,
    `0.0.0.0 0.0.0.0`,
    `Hardware Switch`,
    `PING HTTPS SSH HTTP`,
    `root`,
    `0`
  ),
  createData(
    `up`,
    `wan1`,
    undefined,
    `0.0.0.0 0.0.0.0`,
    `Physical Interface`,
    `PING HTTPS SSH HTTP Telnet`,
    `root`,
    `0`
  )
];

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    });
  };

  render() {
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
                  className="jr-btn border-0 no-shadow bg-secondary text-white"
                  caret
                >
                  Create New
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink
                      className="prepend-icon"
                      to="/app/network/interfaces/edit"
                    >
                      <span className="nav-text">
                        <IntlMessages id="app.network.interfaces.list.interface" />
                      </span>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>Virtual Wire Pair</DropdownItem>
                  <DropdownItem>VDOM Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button className="jr-btn bg-secondary text-white">Edit</Button>
              <Button className="jr-btn bg-secondary text-white">Delete</Button>
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
                  {data.map((d, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{d.status}</TableCell>
                        <TableCell align="left">{d.name}</TableCell>
                        <TableCell align="left">{d.members}</TableCell>
                        <TableCell align="left">{d.ipNetMask}</TableCell>
                        <TableCell align="left">{d.type}</TableCell>
                        <TableCell align="left">{d.access}</TableCell>
                        <TableCell align="left">{d.virtualDomain}</TableCell>
                        <TableCell align="left">{d.ref}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default List;
