const Top = {
  tag: "component.network.interfaces.new",
  editors: [
    {
      id: `name`,
      className: ``,
      label: `Interface Name`,
      type: `text`
    },
    {
      id: `alias`,
      className: ``,
      label: `Alias`,
      type: `text`
    },
    {
      id: `type`,
      className: ``,
      label: `Type`,
      type: `text`,
      select: true,
      options: [
        {
          label: `VLAN`,
          value: `vlan`
        }
      ]
    },
    {
      id: `interface`,
      className: ``,
      label: `Interface`,
      type: `text`,
      select: true,
      options: [
        {
          label: `dmz`,
          value: `dmz`
        }
      ]
    },
    {
      id: `vlanid`,
      className: ``,
      label: `VLAN ID`,
      type: `text`,
      default: 0
    },
    {
      id: `virtualDomain`,
      className: ``,
      label: `Virtual Domain`,
      type: `text`,
      select: true,
      options: [
        {
          label: `root`,
          value: `root`
        }
      ]
    }
  ]
};

const Tags = {
  tag: "component.network.interfaces.tags",
  editors: [
    {
      id: `role`,
      className: ``,
      label: `Role`,
      type: `text`,
      select: true,
      options: [
        {
          label: `LAN`,
          value: `lan`
        }
      ]
    }
  ]
};

const Address = {
  tag: "component.network.interfaces.address",
  editors: [
    {
      id: `addressingMode`,
      className: `d-flex flex-row`,
      label: `Addressing mode`,
      type: `radiosGroup`,
      defaultValue: `manual`,
      options: [
        {
          label: `Manual`,
          value: `manual`
        },
        {
          label: `DHCP`,
          value: `dhcp`
        },
        {
          label: `PPPoE`,
          value: `pppoe`
        }
      ]
    },
    {
      id: `IPNetworkMask`,
      className: ``,
      label: `IP/Network Mask`,
      type: `text`,
      defaultValue: `0.0.0.0/0.0.0.0`,
      condition: parent => parent[`addressingMode`] === `manual`
    },
    {
      id: `username`,
      className: ``,
      label: `Username`,
      type: `text`,
      condition: parent => parent[`addressingMode`] === `pppoe`
    },
    {
      id: `matchSubnet`,
      className: ``,
      label: `Create address object matching subnet`,
      type: `switch`,
      condition: parent =>
        parent[`addressingMode`] === `manual` ||
        parent[`addressingMode`] === `dhcp`
    },
    {
      id: `addrObjName`,
      className: ``,
      label: `Name`,
      type: `text`,
      condition: parent => parent[`matchSubnet`] === true
    },
    {
      id: `addrObjDefinition`,
      className: ``,
      label: `Definition`,
      type: `text`,
      condition: parent => parent[`matchSubnet`] === true
    }
  ]
};

export default {
  cards: [Top, Tags, Address]
};
