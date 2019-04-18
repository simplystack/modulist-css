# Table <Badge text="development" type="warn" />
The inevitable HTML table, with special case cells.

## Default
<p>You simply need to attach a single <code>.table</code> CSS class on a <code>&lt;table&gt;</code> with the following structure:</p>
  <ul>
    <li>
      <code>table</code> the main <strong>container</strong>
      <ul>
        <li>
          <code>thead</code> the optional <strong>top</strong> part of the table
        </li>
        <li>
          <code>tfoot</code> the optional <strong>bottom</strong> part of the table
        </li>
        <li>
          <code>tbody</code> the main <strong>content</strong> of the table
          <ul>
            <li>
              <code>tr</code> each table <strong>row</strong>
              <ul>
                <li>
                  <code>th</code> a table cell <strong>heading</strong>
                </li>
                <li>
                  <code>td</code> a table <strong>cell</strong>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

<div class="p-3 border rounded-2 my-3">
          <div class="table-responsive">
            <div class="table-header">
              <h2 class="h2">Simple table</h2>
              <div class="table-header__actions">
                <div class="table-header__search">
                  <div class="textbox textbox--size-3">
                    <input type="text" placeholder="Search" class="textbox__input" />
                  </div>
                </div>
                <div class="table-header__action">
                  <button class="button button--alternative button--size-3">Action</button>
                </div>
              </div>
            </div>
            <table class="table">
              <thead>
              <tr>
                <th scope="col" class="table-select-column">
                  <input type="checkbox" />
                </th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td scope="row" class="table-select-column">
                  <input type="checkbox" />
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div class="text-align-right">
                    <button class="button button--default button--size-3">More</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="table-select-column">
                  <input type="checkbox" />
                </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <div class="text-align-right">
                    <button class="button button--default button--size-3">More</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="table-select-column">
                  <input type="checkbox" />
                </td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <div class="text-align-right">
                    <button class="button button--default button--size-3">More</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="table-pagination">
              <ul class="pagination">
                <li class="pagination__item">
                  <button class="button button--default button--size-3" disabled aria-label="Go to first page">First</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" disabled aria-label="Go to previous page">Previous</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--primary button--size-3" aria-label="Go to page number 1">1</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to page number 2">2</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to page number 3">3</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to next page">Next</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to last page">Last</button>
                </li>
              </ul>
            </div>
          </div>
</div>

## Empty
<div class="p-3 border rounded-2 my-3">
<div class="table-responsive">
            <div class="table-header">
              <h2 class="h2">Empty table</h2>
              <div class="table-header__actions">
                <div class="table-header__search">
                  <div class="textbox textbox--size-3">
                    <input disabled type="text" placeholder="Search" class="textbox__input" />
                  </div>
                </div>
                <div class="table-header__action">
                  <button class="button button--alternative button--size-3">Action</button>
                </div>
              </div>
            </div>
            <table class="table">
              <thead>
              </thead>
              <tbody>
              <tr>
                <div class="table-empty">There is no records</div>
              </tr>
              </tbody>
            </table>
            <div class="table-pagination">
              <ul class="pagination">
                <li class="pagination__item">
                  <button class="button button--default button--size-3" disabled aria-label="Go to first page">First</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" disabled aria-label="Go to previous page">Previous</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--primary button--size-3" aria-label="Go to page number 1">1</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to page number 2">2</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to page number 3">3</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to next page">Next</button>
                </li>
                <li class="pagination__item">
                  <button class="button button--default button--size-3" aria-label="Go to last page">Last</button>
                </li>
              </ul>
            </div>
          </div>
</div>
