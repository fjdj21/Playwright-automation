import { Page, Locator } from "@playwright/test";

export class Selenium_Locators {
    readonly page: Page;
    readonly titleName: Locator;
    readonly formName: Locator;
    readonly labelName: Locator;
    readonly inputName: Locator;
    readonly labelEmail: Locator;
    readonly inputEmail: Locator;
    readonly labelGender: Locator;
    readonly labelGenderMale: Locator;
    readonly maleRadioButton: Locator;
    readonly labelGenderFemale: Locator;
    readonly femaleRadioButton: Locator;
    readonly labelGenderOther: Locator;
    readonly otherRadioButton: Locator;
    readonly labelMobile: Locator;
    readonly inputMobile: Locator;
    readonly labelDateOfBirth: Locator;
    readonly inputDateOfBirth: Locator;
    readonly labelSubjects: Locator;
    readonly inputSubjects: Locator;
    readonly labelHobbies: Locator;
    readonly labelHobbiesSports: Locator;
    readonly labelHobbiesReading: Locator;
    readonly labelHobbiesMusic: Locator;
    readonly inputHobbiesSports: Locator;
    readonly inputHobbiesReading: Locator;
    readonly inputHobbiesMusic: Locator;
    readonly labelPicture: Locator;
    readonly inputPicture: Locator;
    readonly labelAddress: Locator;
    readonly inputAddress: Locator;
    readonly labelStateAndCity: Locator;
    readonly chooseStateDropdown: Locator;
    readonly chooseCityDropdown: Locator;
    readonly seleniumURL: string;
    readonly amazonURL: string;
    readonly sauceDemoURL: string;

    constructor(page: Page) {

        this.page = page;
        this.seleniumURL = 'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php';
        this.sauceDemoURL = 'https://www.saucedemo.com/'
        this.amazonURL = 'https://www.amazon.com/'
        this.titleName = page.getByText('Selenium - Automation Practice Form');
        this.formName = page.getByText('Student Registration Form');
        this.labelName = page.getByLabel('Name:', {exact : true});
        this.inputName = page.getByPlaceholder('First Name', {exact : true})
        this.labelEmail = page.getByLabel('Email:', {exact : true});
        this.inputEmail = page.getByPlaceholder('name@example.com', {exact : true})
        this.labelGender = page.getByLabel('Gender:', {exact : true});
        this.labelGenderMale = page.getByText('Male', {exact : true})
        this.maleRadioButton = page.locator('input[type="radio"]').nth(0)
        this.labelGenderFemale = page.getByText('Female', {exact : true})
        this.femaleRadioButton = page.locator('input[type="radio"]').nth(1)
        this.labelGenderOther = page.getByText('Other', {exact : true})
        this.otherRadioButton = page.locator('input[type="radio"]').nth(2)
        this.labelMobile = page.getByLabel('Mobile(10 Digits):', {exact : true})
        this.inputMobile = page.getByPlaceholder('Enter Mobile Number', {exact : true})
        this.labelDateOfBirth = page.getByLabel('Date of Birth:', {exact: true})
        this.inputDateOfBirth = page.locator('#dob');
        this.labelSubjects = page.getByLabel('Subjects:', {exact : true})
        this.inputSubjects = page.getByPlaceholder('Enter Subject', {exact : true})
        this.labelHobbies = page.getByLabel('Hobbies:', {exact : true})
        this.labelHobbiesSports = page.getByText('Sports', {exact : true})
        this.labelHobbiesReading = page.getByText('Reading', {exact : true})
        this.labelHobbiesMusic = page.getByText('Music', {exact : true})
        this.inputHobbiesSports = page.getByRole('checkbox').nth(0)
        this.inputHobbiesReading = page.getByRole('checkbox').nth(1)
        this.inputHobbiesMusic = page.getByRole('checkbox').nth(2)
        this.labelPicture = page.getByLabel('Picture:', {exact : true})
        this.inputPicture = page.locator('input[type="file"]#picture')
        this.labelAddress = page.getByText('Current Address:', {exact : true});
        this.inputAddress = page.getByPlaceholder('Currend Address', {exact : true});
        this.labelStateAndCity = page.getByLabel('State and City', {exact : true});
        this.chooseStateDropdown = page.locator('#state');
        this.chooseCityDropdown = page.locator('#city');
    }

    async navigateToSeleniumPracticeForm() {
        await this.page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    }

    async fillStudentForm(data: {
        name: string,
        email: string,
        gender: 'Male' | 'Female' | 'Other',
        mobile: string,
        dob: string,
        subject: string,
        hobbies: string[],
        picturePath: string,
        address: string,
        state: string,
        city: string
    }) {
        await this.inputName.fill(data.name);
        await this.inputEmail.fill(data.email);
        if (data.gender === 'Male') await this.maleRadioButton.click();
        if (data.gender === 'Female') await this.femaleRadioButton.click();
        if (data.gender === 'Other') await this.otherRadioButton.click();
        await this.inputMobile.fill(data.mobile);
        await this.inputDateOfBirth.fill(data.dob);
        await this.inputSubjects.fill(data.subject);
    
        if (data.hobbies.includes('Sports')) await this.inputHobbiesSports.click();
        if (data.hobbies.includes('Reading')) await this.inputHobbiesReading.click();
        if (data.hobbies.includes('Music')) await this.inputHobbiesMusic.click();
    
        await this.inputPicture.setInputFiles(data.picturePath);
        await this.inputAddress.fill(data.address);
        await this.chooseStateDropdown.selectOption(data.state);
        await this.chooseCityDropdown.selectOption(data.city);
    }

    async validateAllFieldsVisible() {
        const fieldsToCheck = [
          this.titleName,
          this.formName,
          this.labelName,
          this.inputName,
          this.labelEmail,
          this.inputEmail,
          this.labelGender,
          this.labelGenderMale,
          this.maleRadioButton,
          this.labelGenderFemale,
          this.femaleRadioButton,
          this.labelGenderOther,
          this.otherRadioButton,
          this.labelMobile,
          this.inputMobile,
          this.labelDateOfBirth,
          this.inputDateOfBirth,
          this.labelSubjects,
          this.inputSubjects,
          this.labelHobbies,
          this.labelHobbiesSports,
          this.labelHobbiesReading,
          this.labelHobbiesMusic,
          this.inputHobbiesSports,
          this.inputHobbiesReading,
          this.inputHobbiesMusic,
          this.labelPicture,
          this.inputPicture,
          this.labelAddress,
          this.inputAddress,
          this.labelStateAndCity,
          this.chooseStateDropdown,
          this.chooseCityDropdown
        ];
      
      }

}

