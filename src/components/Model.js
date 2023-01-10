import React from 'react';

const Model = () => {
    return (
        <div class="container">
  <h1 class="text-center">Multiple Checkboxes Selection Dropdown (MultiSelect)</h1><hr/>
  <div class="col-md-4">
    <div class="wrapper">
      <button class="form-control toggle-next ellipsis">All Categories (342)</button>

      <div class="checkboxes" id="Categories">
        <label class="apply-selection">
          <input type="checkbox" value="" class="ajax-link" />
          &#x2714; apply selection
        </label>
        
        <div class="inner-wrap">
          <label>
            <input type="checkbox" value="all_categories" class="ckkBox all" />
            <span>All Categories (342)</span>
          </label><br />

          <label>
            <input type="checkbox" value="new_car" class="ckkBox val" checked />
            <span>New Cars (54)</span>
          </label><br />

          <label>
            <input type="checkbox" value="used_car" class="ckkBox val" checked />
            <span>Used Cars (32)</span>
          </label><br />

          <label>
            <input type="checkbox" value="oldtimer" class="ckkBox val" />
            <span>Oldtimer (43)</span>
          </label><br />
          
          <label>
            <input type="checkbox" value="new_car" class="ckkBox val" />
            <span>New Cars 2 (54)</span>
          </label><br />

          <label>
            <input type="checkbox" value="used_car" class="ckkBox val" />
            <span>Used Cars 2 (32)</span>
          </label><br />

          <label>
            <input type="checkbox" value="oldtimer" class="ckkBox val" />
            <span>Oldtimer 2 (43)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="wrapper">
      <button class="form-control toggle-next ellipsis">All Lorems (422)</button>
      <div class="checkboxes" id="Lorems">
        <label class="apply-selection">
          <input type="checkbox" value="" class="ajax-link" />
          &#x2714; apply selection
        </label>
        
        <div class="inner-wrap">
          <label>
            <input type="checkbox" value="all_lorems" class="ckkBox all" checked />
            <span>All Lorems (422)</span>
          </label><br />

          <label>
            <input type="checkbox" value="dolor" class="ckkBox val" />
            <span>Dolor (34) </span>
          </label><br />

          <label>
            <input type="checkbox" value="lorem" class="ckkBox val" />
            <span>Lorem (234)</span>
          </label><br />

          <label>
            <input type="checkbox" value="ipsum" class="ckkBox val" />
            <span>Ipsum (12)</span>
          </label><br />
          
          <label>
            <input type="checkbox" value="dolor" class="ckkBox val" />
            <span>Dolor 2 (34) </span>
          </label><br />

          <label>
            <input type="checkbox" value="lorem" class="ckkBox val" />
            <span>Lorem 2 (234)</span>
          </label><br />

          <label>
            <input type="checkbox" value="ipsum" class="ckkBox val" />
            <span>Ipsum 2 (12)</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-md-4">
    <div class="wrapper">
      <button class="form-control toggle-next ellipsis">All Pets (864)</button>
      <div class="checkboxes" id="Lorems">
        <label class="apply-selection">
          <input type="checkbox" value="" class="ajax-link" />
          &#x2714; apply selection
        </label>
        
        <div class="inner-wrap">
          <label>
            <input type="checkbox" value="all_pets" class="ckkBox all" checked />
            <span>All Pets (864)</span>
          </label><br />

          <label>
            <input type="checkbox" value="dolor" class="ckkBox val" />
            <span>Cats (34) </span>
          </label><br />

          <label>
            <input type="checkbox" value="lorem" class="ckkBox val" />
            <span>Dogs (234)</span>
          </label><br />

          <label>
            <input type="checkbox" value="ipsum" class="ckkBox val" />
            <span>Birds (12)</span>
          </label><br />
          
          <label>
            <input type="checkbox" value="dolor" class="ckkBox val" />
            <span>Cats 2 (34) </span>
          </label><br />

          <label>
            <input type="checkbox" value="lorem" class="ckkBox val" />
            <span>Dogs 2 (234)</span>
          </label><br />

          <label>
            <input type="checkbox" value="ipsum" class="ckkBox val" />
            <span>Birds 2 (12)</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Model;