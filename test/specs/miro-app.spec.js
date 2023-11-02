/* await click_me_button.waitForExist();
This can be goog approach during select frame. When select frame through search it becomes exist
*/
describe("Miro API", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("/");
  });
  it("Miro API", async () => {
    await browser.pause(2000);
    await browser
      .$(
        "/html//div[@id='__next']//header//nav[@class='Box-sc-g760pt-0 Header__HeaderNav-sc-17ykco4-2 fnkLPr iWMIWS']/ul[@class='Box-sc-g760pt-0 CtaNavigation__List-sc-kwkdu7-0 fXaazk']//a[@href='/login/']"
      )
      .click();
    const emailID = await $("/html//input[@id='email']");
    const password = await $("/html//input[@id='password']");
    const submitLogin = await $(
      "/html/body/div[1]/div//form/button[@class='signup__submit']"
    );

    await emailID.setValue("ahmet.erdonmez77@gmail.com");
    await password.setValue("AhmeT3166");
    await browser.pause(5000);
    await submitLogin.waitForClickable();
    await submitLogin.click();
    await browser.pause(2000);
    await $(
      "[class='dashboardSidebar-3-MQY dashboard-sidebar'] [aria-label='Show recent boards']"
    ).click();
    const proj = await $("[class] [role='listitem']:nth-child(3)");
    //console.log(await proj.isDisplayed(), await proj.isClickable());
    await browser.pause(2000);
    await proj.click();
    await browser.pause(7000);
    await $("[data-testid='canvas-controls-zoom-out']").click();
    await browser.pause(1000);
    await $("[data-testid='canvas-controls-zoom-out']").click();
    await browser.pause(1000);
    await $("[data-testid='canvas-controls-zoom-out']").click();
    await browser.pause(1000);
    await $("[data-testid='canvas-controls-zoom-out']").click();
    await browser.pause(1000);
    await $("[data-testid='canvas-controls-zoom-out']").click();
    //PROJECT 1
    const searchBtn = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn.click();
    await browser.pause(2000);
    const searchProj = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj.setValue("Hello Frame 01-02-2023");
    const res = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res.moveTo();
    await res.doubleClick();
    await browser.pause(1000);
    const threeDots = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots.waitForDisplayed();
    await threeDots.click();
    await browser.pause(1000);
    const rename = await $("#start-edit-title [data-testid]");
    await rename.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 1`;
    });
    await browser.pause(2000);
    //PROJECT 2
    const searchBtn2 = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn2.click();
    await browser.pause(2000);
    const searchProj2 = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj2.setValue("Copy");
    const res2 = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res2.moveTo();
    await res2.doubleClick();
    await browser.pause(1000);
    const threeDots2 = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots2.waitForDisplayed();
    await threeDots2.click();
    await browser.pause(1000);
    const rename2 = await $("#start-edit-title [data-testid]");
    await rename2.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 2`;
    });
    await browser.pause(2000);
    //PROJECT 3
    const searchBtn3 = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn3.click();
    await browser.pause(2000);
    const searchProj3 = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj3.setValue("Copy");
    const res3 = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res3.moveTo();
    await res3.doubleClick();
    await browser.pause(1000);
    const threeDots3 = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots3.waitForDisplayed();
    await threeDots3.click();
    await browser.pause(1000);
    const rename3 = await $("#start-edit-title [data-testid]");
    await rename3.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 3`;
    });
    await browser.pause(2000);
    //PROJECT 4
    const searchBtn4 = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn4.click();
    await browser.pause(2000);
    const searchProj4 = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj4.setValue("Copy");
    const res4 = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res4.moveTo();
    await res4.doubleClick();
    await browser.pause(1000);
    const threeDots4 = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots4.waitForDisplayed();
    await threeDots4.click();
    await browser.pause(1000);
    const rename4 = await $("#start-edit-title [data-testid]");
    await rename4.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 4`;
    });
    await browser.pause(2000);
    //PROJECT 5
    const searchBtn5 = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn5.click();
    await browser.pause(2000);
    const searchProj5 = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj5.setValue("Copy");
    const res5 = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res5.moveTo();
    await res5.doubleClick();
    await browser.pause(1000);
    const threeDots5 = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots5.waitForDisplayed();
    await threeDots5.click();
    await browser.pause(1000);
    const rename5 = await $("#start-edit-title [data-testid]");
    await rename5.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 5`;
    });
    await browser.pause(2000);
    //PROJECT 6
    const searchBtn6 = await $(
      "[data-testid='board-header__search-popup'] .rtb-select__button-container"
    );
    await searchBtn6.click();
    await browser.pause(2000);
    const searchProj6 = await $("/html//input[@id='boardLayoutSearch']");
    await searchProj6.setValue("Copy");
    const res6 = await $("li:nth-of-type(1) > .contentResultItem-1XSSd");
    await browser.pause(3000);
    await res6.moveTo();
    await res6.doubleClick();
    await browser.pause(1000);
    const threeDots6 = await $(
      "[class='cm-item--js wrapper-2V46B item-3QKNz cm-custom-cmhi-more'] [data-testid='tooltip-wrapper__trigger']"
    );
    await threeDots6.waitForDisplayed();
    await threeDots6.click();
    await browser.pause(1000);
    const rename6 = await $("#start-edit-title [data-testid]");
    await rename6.click();
    await browser.pause(1000);

    browser.execute(function () {
      document.querySelector(
        ".ql-editor > p"
      ).innerHTML = `Hello I am changed title 6`;
    });
    await browser.pause(2000);
  });

  it.skip("Send Mail", async () => {
    await browser.url("https://mail.google.com/mail/u/0/#inbox");
    const mailId = await $("input#identifierId");
    await mailId.setValue("ahmet.erdonmez77@gmail.com");
    await browser.pause(2000);
    await $("#identifierNext .VfPpkd-RLmnJb").click();
    await browser.pause(1000);
    const mailPassword = await $("input[name='password']");
    await mailPassword.setValue("AhmeT3166");
    await browser.pause(1000);
    await $("#passwordNext .VfPpkd-RLmnJb").click();
    await browser.pause(4000);
    const createMail = await $(".z0");
    await createMail.click();
    await $("tr#:1ud  img[alt='Yeni pencere']").click(); //big screen
    await browser.pause(2000);
    const toWhom = await $("[id=':1vo'] [peoplekit-id='BbVjBd']");
    await toWhom.setValue("ahmet.erdonmez77@gmail.com");
    await browser.pause(1000);
    const mailSub = await $("[id=':1vs'] [autocomplete]");
    await mailSub.setValue(`The report of ${new Date().getTime()} date.`);
    await browser.pause(1000);
    browser.execute(function () {
      document.querySelector(
        "#:1uk"
      ).innerHTML = `Dear Ahmet; Your test has been done`;
    });
    await browser.pause(1000);
    await $("[id=':1yb'] .dC [role='button']:nth-of-type(1)").click();
  });
});

/* await browser.saveScreenshot("duty.png") */
