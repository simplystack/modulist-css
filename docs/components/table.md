# Table <Badge text="review" type="warn"/>
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
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

## Bordered
Add borders to all the cells. <code>table table--bordered</code>

<div class="p-3 border rounded-2 my-3">
  <table class="table table--bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

## Fullwidth
You can have a fullwidth table. <code>table table--fullwidth</code>

<div class="p-3 border rounded-2 my-3">
  <table class="table table--fullwidth">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>
