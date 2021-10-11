<template>
  <div class="form">
    <form class="form_wrap">
      <div class="form_col">
        <div class="form_title">Представьтесь, пожалуйста</div>

        <label>
          <p>* Фамилия</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>* Имя</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>Организация и должность</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <div class="form_radio">
          <p>           
            <input id="prof_1" type="radio" name="profession" />
            <label for="prof_1">Потребитель</label>
          </p>
          <p>           
            <input id="prof_2" t type="radio" name="profession" />
             <label for="prof_2">Медицинский работник</label>
          </p>
          <p>           
            <input id="prof_3" type="radio" name="profession" />
            <label for="prof_3">Журналист</label>
          </p>
        </div>

        <div class="form_title form_title--mg">Сообщение</div>

        <label>
          <p>Тема сообщения</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label class="form_area">
          <p>* Сообщение</p>
          <textarea></textarea>
        </label>
      </div>

      <div class="form_col">
        <div class="form_title">Контактная информация</div>

        <label>
          <p>* Email</p>
          <input type="email" pattern="" />
        </label>

        <label>
          <p>Страна</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>Город</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>Индекс</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>Адрес</p>
          <input type="text" pattern="/[А-Яа-яЁё]/g" />
        </label>

        <label>
          <p>* Телефон</p>
          <input type="phone" pattern="" />
        </label>

        <div>
          <button type="submit">отправить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.form {
  &_wrap {
    display: flex;
    justify-content: space-between;
    max-width: 637px;
    margin: 0 auto;
    padding: 60px 20px 80px;
  }
  &_title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 50px;
    &--mg {
      margin-bottom: 18px;
    }
  }

  label {
    display: block;
    margin-bottom: 10px;
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;

      color: #000000;
      margin-bottom: 3px;
    }
    input {
      display: block;
      height: 31px;
      width: 246px;
      border: 1px solid #000000;
      box-sizing: border-box;
      outline: none;
      &[type="radio"] {
        position: absolute;
        visibility: hidden;
      }
    }
  }

  &_radio {
    margin: 14px 0 28px;
    label {
      position: relative;
      padding-left: 18px;
      &::before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #000000;
        box-sizing: border-box;
      }
      &::after{
        position: absolute;
        left: 3px;
        top: 3px;
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;    
        box-sizing: border-box;
      
      }
    }
    p {
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      input {
        position: absolute;
        visibility: hidden;
        &:checked ~ label:after {
           background: #FF0000;
        }
      }
    }
  }

  &_area{
    margin-top: 22px;
    textarea{
      width: 246px;
      height: 85px;
      resize: none;
      box-sizing: border-box;
      border: 1px solid #000000;
    }
  }

  button{
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 22px;    
    text-transform: lowercase;
    width: 246px;

    color: #FFFFFF;
    background: #464646;
    border: 1px solid #000000;
    box-sizing: border-box;
  }

  &_col{
    &:nth-of-type(2){
      label{
        margin-bottom: 26.5px;
      }
    }
  }
}
</style>
