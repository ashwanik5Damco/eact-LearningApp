import React, { Component } from "react";

export class TableHeader extends Component {
  render() {
    const { tableHeader } = this.props;
    return (
      <>
        <thead>
          <tr>
            {tableHeader.map((key, index) => {
              return (
                <th scope="col" key={index}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
      </>
    );
  }
}

export default TableHeader;
