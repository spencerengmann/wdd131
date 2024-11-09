document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
  
    // Add participant functionality
    const addParticipantButton = document.getElementById("add");
    addParticipantButton.addEventListener("click", addParticipant);
  
    function addParticipant() {
      participantCount += 1;
  
      // Template for new participant section
      const newParticipantHTML = `
        <section class="participant${participantCount}">
          <p>Participant ${participantCount}</p>
          <div class="item">
            <label for="fname${participantCount}">First Name<span>*</span></label>
            <input id="fname${participantCount}" type="text" name="fname${participantCount}" required />
          </div>
          <div class="item activities">
            <label for="activity${participantCount}">Activity #<span>*</span></label>
            <input id="activity${participantCount}" type="text" name="activity${participantCount}" />
          </div>
          <div class="item">
            <label for="fee${participantCount}">Fee ($)<span>*</span></label>
            <input id="fee${participantCount}" type="number" name="fee${participantCount}" />
          </div>
          <div class="item">
            <label for="date${participantCount}">Desired Date <span>*</span></label>
            <input id="date${participantCount}" type="date" name="date${participantCount}" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select id="grade${participantCount}">
              <option selected value="" disabled></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>`;
  
      // Insert new participant section before Add button
      addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    }
  
    // Submit form functionality
    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
  
    function submitForm(event) {
      event.preventDefault();
  
      // Calculate total fees
      const totalFees = calculateTotalFees();
      const adultName = document.getElementById("adult_name").value;
      const numParticipants = participantCount;
  
      // Display summary message
      const summarySection = document.getElementById("summary");
      summarySection.innerHTML = `
        <p>Thank you, ${adultName}, for registering.</p>
        <p>You have registered ${numParticipants} participant(s) and owe $${totalFees} in fees.</p>`;
      form.style.display = "none";
      summarySection.style.display = "block";
    }
  
    // Function to calculate total fees
    function calculateTotalFees() {
      const feeElements = [...document.querySelectorAll("[id^=fee]")];
      return feeElements.reduce((total, feeElement) => total + Number(feeElement.value || 0), 0);
    }
  });
  