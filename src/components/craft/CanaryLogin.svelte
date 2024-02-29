<script lang="ts">

</script>

<section>
  <div class="container">
    <div class="header">
      <img class="inyoni" src="/images/inyoni.gif" alt="" draggable="false">
      <img class="canary" src="/images/canary.png" alt="" draggable="false">
    </div>
    <div tabindex="-1" class="form">
      <div class="card">
        <div class="card-row">
          <input tabindex="-1" id="email" type="email" name="email" placeholder="" autocomplete="off">
          <label for="email">Email Address</label>
        </div>
        <div class="card-row">
          <input tabindex="-1" id="password" type="password" name="password" placeholder="" autocomplete="off">
          <label for="password">Password</label>
        </div>
      </div>
      <button tabindex="-1" type="submit">Log in to your Console</button>
    </div>
    <div class="footer">
      <a tabindex="-1" href="/">Forgot your password?</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--color-card);
    border: functions.toRem(1px) solid var(--color-border);
    height: 100%;
    width: 100%;
    border-radius: functions.toRem(16px);
    overflow: hidden;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  .container {
    padding: functions.toRem(60px) functions.toRem(24px) 0 functions.toRem(24px);
    min-width: functions.toRem(432px);
  }

  .header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    .inyoni {
      position: absolute;
      left: 0;
      bottom: functions.toRem(-9px);
      max-height: 120px;
      user-select: none;
    }
    .canary {
      position: absolute;
      left: functions.toRem(126px);
      bottom: functions.toRem(20px);
      max-height: functions.toRem(38px);
      user-select: none;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Avenir, 'X', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .card {
      display: block;
      background: var(--color-background);
      width: 100%;
      border-radius: functions.toRem(8px);
      box-shadow: 0 functions.toRem(4px) functions.toRem(10px) 0 rgba(0,0,0, 0.06);
      &-row {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: functions.toRem(6px) functions.toRem(16px) functions.toRem(6px) functions.toRem(14px);
        &:first-child {
          border-bottom: functions.toRem(1px)solid rgba(0, 0, 0, 0.05);
        }
      }
    }
    label {
      position: absolute;
      top: functions.toRem(18px);
      font-size: functions.toRem(16px);
      font-weight: 500;
      opacity: .4;
      pointer-events: none;
      transition: all 0.2s ease;
    }
    input {
      border: none;
      outline: none;
      box-shadow: none;
      background-color: transparent;
      display: block;
      font-size: functions.toRem(15px);
      bottom: functions.toRem(6px);
      color: #03B46E;
      font-weight: 700;
      transition: color 1s cubic-bezier(0.165, 0.63, 0.14, 0.82);
      height: 0;
      padding: functions.toRem(34px) 0 functions.toRem(10px) 0;
      line-height: 1.5;
      &:focus {
        color: var(--color-text);
        outline: none;
        border: none;
        box-shadow: none;
      }
    }
    input:focus ~ label, input:not(:focus):not(:placeholder-shown) ~ label {
      transform: translateY(-8px);
      font-size: functions.toRem(12px);
      opacity: .6;
      font-weight: 500;
    }
    button {
      display: block;
      border-radius: functions.toRem(6px);
      height: functions.toRem(40px);
      padding: 0 functions.toRem(16px);
      background-color: #03B46E;
      color: #fff;
      font-weight: 700;
      text-align: center;
      margin-top: functions.toRem(16px);
      line-height: functions.toRem(10px);
      box-shadow: 0 1px 3px rgba(0,0,0,.30);
      font-size: functions.toRem(16px);
    }
  }

  a {
    display: inline-block;
    color: #03B46E;
    font-weight: 500;
    font-size: functions.toRem(13px);
    cursor: pointer;
    margin-top: functions.toRem(12px);
    text-align: left;
  }
</style>