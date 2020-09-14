import React, { Component } from "react";
import "../App.css";

class TableBody extends Component {
  state = {};
  render() {
    return (
      <tbody>
        <tr>
          <th scope="row">
            <figure className="figure d-md-flex">
              <img
                className="figure-img img-fluid rounded col-md-2 mr-3 sample"
                src="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg"
              />
              <figcaption className="figure-caption">
                <h4>Product Tilte</h4>
                <p>Brief Content</p>
              </figcaption>
            </figure>
          </th>
          <td>
            <span>35</span>%
          </td>
          <td>
            <select className="custom-select">
              <option selected="selected" value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            $
            <span className="price" value="1.99">
              1.99
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
                <button
                  className="btn btn-secondary btn-info"
                  type="button"
                  data-placement="left"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Remaining"
                  data-content="3"
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button
                  className="btn btn-secondary btn-danger"
                  type="button"
                  onclick="del(this)"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <figure className="figure d-md-flex">
              <img
                className="figure-img img-fluid rounded col-md-2 mr-3 sample"
                src="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg"
              />
              <figcaption className="figure-caption">
                <h4>Product Tilte</h4>
                <p>Brief Content</p>
              </figcaption>
            </figure>
          </th>
          <td>
            <span className="coupon">N/A</span>
          </td>
          <td>
            <select className="custom-select">
              <option selected="selected" value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            $
            <span className="price" value="100.99">
              100.99
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
                <button
                  className="btn btn-secondary btn-info"
                  type="button"
                  data-placement="left"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Remaining"
                  data-content="3"
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button
                  className="btn btn-secondary btn-danger"
                  type="button"
                  onclick="del(this)"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <figure className="figure d-md-flex">
              <img
                className="figure-img img-fluid rounded col-md-2 mr-3 sample"
                src="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg"
              />
              <figcaption className="figure-caption">
                <h4>Product Tilte</h4>
                <p>Brief Content</p>
              </figcaption>
            </figure>
          </th>
          <td>
            <span>15</span>%
          </td>
          <td>
            <select className="custom-select">
              <option selected="selected" value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            $
            <span className="price" value="21.99">
              21.99
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
                <button
                  className="btn btn-secondary btn-info"
                  type="button"
                  data-placement="left"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Remaining"
                  data-content="3"
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button
                  className="btn btn-secondary btn-danger"
                  type="button"
                  onclick="del(this)"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <figure className="figure d-md-flex">
              <img
                className="figure-img img-fluid rounded col-md-2 mr-3 sample"
                src="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg"
              />
              <figcaption className="figure-caption">
                <h4>Product Tilte</h4>
                <p>Brief Content</p>
              </figcaption>
            </figure>
          </th>
          <td>
            <span>20</span>%
          </td>
          <td>
            <select className="custom-select">
              <option selected="selected" value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            $
            <span className="price" value="91.99">
              91.99
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
                <button
                  className="btn btn-secondary btn-info"
                  type="button"
                  data-placement="left"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Remaining"
                  data-content="3"
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button
                  className="btn btn-secondary btn-danger"
                  type="button"
                  onclick="del(this)"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <figure className="figure d-md-flex">
              <img
                className="figure-img img-fluid rounded col-md-2 mr-3 sample"
                src="https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg"
              />
              <figcaption className="figure-caption">
                <h4>Product Tilte</h4>
                <p>Brief Content</p>
              </figcaption>
            </figure>
          </th>
          <td>
            <span>12</span>%
          </td>
          <td>
            <select className="custom-select">
              <option selected="selected" value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            $
            <span className="price" value="11.99">
              11.99
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
                <button
                  className="btn btn-secondary btn-info"
                  type="button"
                  data-placement="left"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Remaining"
                  data-content="3"
                >
                  {" "}
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Second group">
                <button
                  className="btn btn-secondary btn-danger"
                  type="button"
                  onclick="del(this)"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default TableBody;
