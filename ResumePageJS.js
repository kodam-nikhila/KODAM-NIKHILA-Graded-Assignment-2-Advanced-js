fetch("./Data.json")
        .then(data => data.json())
        .then(dataArray => {

            let userData = "";

            let currentPage = 0;
            let firstPage = 0;
            let lastPage = dataArray.length-1;


            const nxt = document.getElementById("next");
            const prv = document.getElementById("previous");

            nxt.addEventListener('click', () => {
                currentPage++;

                if(currentPage === firstPage){
                  document.getElementById("previous").style.display = 'none'
                }
                if(currentPage > firstPage){
                  document.getElementById("previous").style.display = 'inline'
                }
                if(currentPage === lastPage){
                  document.getElementById("next").style.display = "none"
                }
                

                userData = `<div class="resume">
                <div class="header-row">
                  <div class="image">
                    <img src="./img/Profile-no-Found.png" alt="" />
                  </div>
                  <h1>${dataArray[currentPage].basics.name}</h1>
                  <p>Applied for: ${dataArray[currentPage].basics.AppliedFor}</p>
                </div>
                <div class="body-row">
                  <div class="col-personal">
                    <div class="personal">
                      <h3>Personal Information</h3>
                      <p>${dataArray[currentPage].basics.phone}</p>
                      <a href="#">${dataArray[currentPage].basics.email}</a><br />
                      <a href=${dataArray[currentPage].basics.profiles.url}>${dataArray[currentPage].basics.profiles.network}</a>
                    </div>
                    <div class="personal">
                      <h3>Technical Skills</h3>
                      <p>${dataArray[currentPage].skills.keywords}</p>
                    </div>
                    <div class="personal">
                      <h3>Hobbies</h3>
                      <p>${dataArray[currentPage].interests.hobbies}</p>
                    </div>
                  </div>
      
                  <div class="col-experiance">
                    <div class="experiance">
                      <h3>Work Experiance in previous company</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >Company name :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.CompanyName}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Postion :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].work.Position}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Start Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.StartDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >End Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.EndDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Summary :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].work.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Projects</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >${dataArray[currentPage].projects.name} :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].projects.description}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Education</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >UG :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].education.UG.institute}, ${dataArray[currentPage].education.UG.course}, ${dataArray[currentPage].education.UG.StartDate}, ${dataArray[currentPage].education.UG.EndDate}, ${dataArray[currentPage].education.UG.cgpa}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Senior Secondary :
                          <span style="font-weight: normal"
                            >${dataArray[currentPage].education.SeniorSecondary.institute}, ${dataArray[currentPage].education.SeniorSecondary.cgpa}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >High School :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].education.HighSchool.institute}, ${dataArray[currentPage].education.HighSchool.cgpa}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Internship</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >Company name :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.CompanyName}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Postion :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.Position}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Start Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.StartDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >End Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.EndDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Summary :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].Internship.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Achievements</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          ><span style="font-weight: normal">
                          ${dataArray[currentPage].achievements.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

            document.getElementById("inner-container").innerHTML = userData;
            });
           

            prv.addEventListener('click', () => {
              currentPage--;

              
              if(currentPage === firstPage){
                document.getElementById("previous").style.display = 'none'
              }
              if(currentPage > firstPage){
                document.getElementById("previous").style.display = 'inline'
              }
              if(currentPage < lastPage){
                document.getElementById("next").style.display = "inline"
              }

              userData = `<div class="resume">
              <div class="header-row">
                <div class="image">
                  <img src="./img/Profile-no-Found.png" alt="" />
                </div>
                <h1>${dataArray[currentPage].basics.name}</h1>
                <p>Applied for: ${dataArray[currentPage].basics.AppliedFor}</p>
              </div>
              <div class="body-row">
                <div class="col-personal">
                  <div class="personal">
                    <h3>Personal Information</h3>
                    <p>${dataArray[currentPage].basics.phone}</p>
                    <a href="#">${dataArray[currentPage].basics.email}</a><br />
                    <a href=${dataArray[currentPage].basics.profiles.url}>${dataArray[currentPage].basics.profiles.network}</a>
                  </div>
                  <div class="personal">
                    <h3>Technical Skills</h3>
                    <p>${dataArray[currentPage].skills.keywords}</p>
                  </div>
                  <div class="personal">
                    <h3>Hobbies</h3>
                    <p>${dataArray[currentPage].interests.hobbies}</p>
                  </div>
                </div>
    
                <div class="col-experiance">
                  <div class="experiance">
                    <h3>Work Experiance in previous company</h3>
                    <div class="content">
                      <label style="font-weight: bold"
                        >Company name :
                        <span style="font-weight: normal"> ${dataArray[currentPage].work.CompanyName}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Postion :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].work.Position}</span
                        ></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Start Date :
                        <span style="font-weight: normal"> ${dataArray[currentPage].work.StartDate}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >End Date :
                        <span style="font-weight: normal"> ${dataArray[currentPage].work.EndDate}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Summary :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].work.Summary}</span
                        ></label
                      >
                    </div>
                  </div>
                  <div class="experiance">
                    <h3>Projects</h3>
                    <div class="content">
                      <label style="font-weight: bold"
                        >${dataArray[currentPage].projects.name} :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].projects.description}</span
                        ></label
                      >
                    </div>
                  </div>
                  <div class="experiance">
                    <h3>Education</h3>
                    <div class="content">
                      <label style="font-weight: bold"
                        >UG :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].education.UG.institute}, ${dataArray[currentPage].education.UG.course}, ${dataArray[currentPage].education.UG.StartDate}, ${dataArray[currentPage].education.UG.EndDate}, ${dataArray[currentPage].education.UG.cgpa}</span
                        ></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Senior Secondary :
                        <span style="font-weight: normal"
                          >${dataArray[currentPage].education.SeniorSecondary.institute}, ${dataArray[currentPage].education.SeniorSecondary.cgpa}</span
                        ></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >High School :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].education.HighSchool.institute}, ${dataArray[currentPage].education.HighSchool.cgpa}</span
                        ></label
                      >
                    </div>
                  </div>
                  <div class="experiance">
                    <h3>Internship</h3>
                    <div class="content">
                      <label style="font-weight: bold"
                        >Company name :
                        <span style="font-weight: normal"> ${dataArray[currentPage].Internship.CompanyName}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Postion :
                        <span style="font-weight: normal"> ${dataArray[currentPage].Internship.Position}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Start Date :
                        <span style="font-weight: normal"> ${dataArray[currentPage].Internship.StartDate}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >End Date :
                        <span style="font-weight: normal"> ${dataArray[currentPage].Internship.EndDate}</span></label
                      >
                      <br />
                      <label style="font-weight: bold"
                        >Summary :
                        <span style="font-weight: normal">
                        ${dataArray[currentPage].Internship.Summary}</span
                        ></label
                      >
                    </div>
                  </div>
                  <div class="experiance">
                    <h3>Achievements</h3>
                    <div class="content">
                      <label style="font-weight: bold"
                        ><span style="font-weight: normal">
                        ${dataArray[currentPage].achievements.Summary}</span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

          document.getElementById("inner-container").innerHTML = userData;
          });

          if(currentPage === firstPage){
            document.getElementById("previous").style.display = 'none'
          }

          if(currentPage === lastPage){
            document.getElementById("previous").style.display = 'none'
          }



                userData = `<div class="resume">
                <div class="header-row">
                  <div class="image">
                    <img src="./img/Profile-no-Found.png" alt="" />
                  </div>
                  <h1>${dataArray[currentPage].basics.name}</h1>
                  <p>Applied for: ${dataArray[currentPage].basics.AppliedFor}</p>
                </div>
                <div class="body-row">
                  <div class="col-personal">
                    <div class="personal">
                      <h3>Personal Information</h3>
                      <p>${dataArray[currentPage].basics.phone}</p>
                      <a href="#">${dataArray[currentPage].basics.email}</a><br />
                      <a href=${dataArray[currentPage].basics.profiles.url}>${dataArray[currentPage].basics.profiles.network}</a>
                    </div>
                    <div class="personal">
                      <h3>Technical Skills</h3>
                      <p>${dataArray[currentPage].skills.keywords}</p>
                    </div>
                    <div class="personal">
                      <h3>Hobbies</h3>
                      <p>${dataArray[currentPage].interests.hobbies}</p>
                    </div>
                  </div>
      
                  <div class="col-experiance">
                    <div class="experiance">
                      <h3>Work Experiance in previous company</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >Company name :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.CompanyName}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Postion :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].work.Position}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Start Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.StartDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >End Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].work.EndDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Summary :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].work.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Projects</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >${dataArray[currentPage].projects.name} :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].projects.description}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Education</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >UG :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].education.UG.institute}, ${dataArray[currentPage].education.UG.course}, ${dataArray[currentPage].education.UG.StartDate}, ${dataArray[currentPage].education.UG.EndDate}, ${dataArray[currentPage].education.UG.cgpa}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Senior Secondary :
                          <span style="font-weight: normal"
                            >${dataArray[currentPage].education.SeniorSecondary.institute}, ${dataArray[currentPage].education.SeniorSecondary.cgpa}</span
                          ></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >High School :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].education.HighSchool.institute}, ${dataArray[currentPage].education.HighSchool.cgpa}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Internship</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          >Company name :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.CompanyName}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Postion :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.Position}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Start Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.StartDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >End Date :
                          <span style="font-weight: normal"> ${dataArray[currentPage].Internship.EndDate}</span></label
                        >
                        <br />
                        <label style="font-weight: bold"
                          >Summary :
                          <span style="font-weight: normal">
                          ${dataArray[currentPage].Internship.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                    <div class="experiance">
                      <h3>Achievements</h3>
                      <div class="content">
                        <label style="font-weight: bold"
                          ><span style="font-weight: normal">
                          ${dataArray[currentPage].achievements.Summary}</span
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

            document.getElementById("inner-container").innerHTML = userData;
        })