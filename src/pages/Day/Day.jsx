import { useState } from "react";



const Day = (props) => {
  const [form, setForm]  = useState({
    date: '',
    snoozedAt: '',
    wokeUp: '',
    totalHours: '',
    beforeSleep: '',
    today: 'worked',
    bodyCondition: 'feeling alright',
  })



  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddDay(form)
  }

  return (
    <>
    <h1>{new Date().toLocaleTimeString()}</h1>
    <h1>are you cozy?</h1>
    <h1>good, now fill out the form</h1>
    <form onSubmit={handleSubmit}>
    <label>today's date:</label>
      <input
          required
          type="text"
          name="date"
          id="date-input"
          value={form.date}
          placeholder="-/-/-"
          onChange={handleChange}
        />
        <br></br>
      <label>yesterday I snoozed at:</label>
      <input
          required
          type="text"
          name="snoozedAt"
          id="snoozedAt-input"
          value={form.snoozedAt}
          placeholder="what time?"
          onChange={handleChange}
        />
        <br></br>
      <label>today I woke up at:</label>
      <input
          required
          type="text"
          name="wokeUp"
          id="wokeUp-input"
          value={form.wokeUp}
          placeholder="what time?"
          onChange={handleChange}
        />
        <br></br>
      <label>total hours</label>
      <input
          required
          type="number"
          name="totalHours"
          id="totalHours-input"
          max={15}
          value={form.totalHours}
          placeholder="hours"
          onChange={handleChange}
        />
        <br></br>
      <label>before sleep</label>
      <select
          required
          name="beforeSleep"
          id="beforeSleep-input"
          value={form.beforeSleep}
          onChange={handleChange}
        >
          <option value="caffeine">caffeine</option>
          <option value="alcohol">alcohol</option>
          <option value="ate_late">ate late</option>
          <option value="smoking">smoking</option>
          <option value="nap">nap</option>
          <option value="screen_time">screen time</option>
          <option value="worked_out">worked out</option>
          <option value="n/a">n/a</option>
        </select>
        <br></br>
      <label>today I</label>
      <select
          required
          name="today"
          id="today-input"
          value={form.today}
          onChange={handleChange}
        >
          <option value="worked">worked</option>
          <option value="chilled">chilled</option>
        </select>
        <br></br>
      <label>how's my body feeling?</label>
      <select
          required
          name="bodyCondition"
          id="bodyCondition-input"
          value={form.bodyCondition}
          onChange={handleChange}
        >
          <option value="feeling_alright">feeling alright</option>
          <option value="blocked_nose">blocked nose</option>
          <option value="headache">headache</option>
          <option value="period">period</option>
          <option value="pain">pain</option>
        </select>
        <br></br>
        <button type="submit">submit</button>
    </form>
    </>
  )
}

export default Day