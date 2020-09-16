import React, { Component } from "react";
import { FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { OverlayTrigger, Popover } from "react-bootstrap";

class Item extends Component {
  state = {};

  render() {
    let currItem = this.props.item;
    const MAX_SELECTION_QUANTITY = 5;

    let selectableQuantityOptions = [];

    for (
      let i = 1;
      i <= Math.min(currItem.inStock, MAX_SELECTION_QUANTITY);
      i++
    ) {
      selectableQuantityOptions.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }

    let remainingPopper = (
      <Popover>
        <Popover.Title as="h3">Remaining</Popover.Title>
        <Popover.Content>{currItem.inStock}</Popover.Content>
      </Popover>
    );

    return (
      <tr>
        <th scope="row">
          <figure className="figure d-md-flex">
            <img
              alt={currItem.title}
              className="figure-img img-fluid rounded col-md-2 mr-3 sample"
              src={currItem.imgURL}
            />
            <figcaption className="figure-caption">
              <h4>{currItem.title}</h4>
              <p>{currItem.description}</p>
            </figcaption>
          </figure>
        </th>
        <td>
          <span>
            {currItem.discountRate === 0 ? "N/A" : currItem.discountRate + "%"}
          </span>
        </td>
        <td>
          <select
            className="custom-select"
            defaultValue="1"
            onChange={(e) =>
              this.props.onUpdateQuantity(currItem, e.target.value)
            }
          >
            {selectableQuantityOptions}
          </select>
        </td>
        <td>
          $
          <span className="price">
            {parseFloat(
              (currItem.unitPrice * currItem.selectedQuantity).toPrecision(12)
            )}
          </span>
        </td>
        <td>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <OverlayTrigger
                trigger="click"
                placement="left"
                overlay={remainingPopper}
              >
                <button
                  variant="success"
                  className="btn btn-secondary btn-info"
                  type="button"
                >
                  <FaSyncAlt />
                </button>
              </OverlayTrigger>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button
                className="btn btn-secondary btn-danger"
                type="button"
                onClick={() => this.props.onDelete(currItem.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default Item;
