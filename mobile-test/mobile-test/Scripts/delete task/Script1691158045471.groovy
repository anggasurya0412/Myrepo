import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

text = 'set new task'

Mobile.startApplication('/Users/investree/Downloads/org.tasks_130400.apk', true)

Mobile.tap(findTestObject('Object Repository/add new task button'), 0)

Mobile.setText(findTestObject('Object Repository/Task name field'), text, 0)

Mobile.tap(findTestObject('Object Repository/select start date'), 0)

Mobile.tap(findTestObject('Object Repository/select date - 30 sept'), 0)

Mobile.tap(findTestObject('Object Repository/Button - OK'), 0)

Mobile.tap(findTestObject('Object Repository/Select due date'), 0)

Mobile.tap(findTestObject('Object Repository/next month button'), 0)

Mobile.tap(findTestObject('Object Repository/select date - 30 agust'), 0)

Mobile.tap(findTestObject('Object Repository/Button - OK'), 0)

Mobile.tap(findTestObject('Object Repository/android.view.View'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.EditText - Enter tag name'), 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Enter tag name (1)'), 'new tag name', 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Create new tag name'), 0)

Mobile.setText(findTestObject('Object Repository/android.widget.EditText - Enter tag name'), 'first tag name', 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Create first tag name'), 0)

Mobile.pressBack()

Mobile.pressBack()

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - When due'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - Randomly'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.RadioButton'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.TextView - OK'), 0)

Mobile.pressBack()

Mobile.tap(findTestObject('Object Repository/save button'), 0)

def title = Mobile.getText(findTestObject('Object Repository/title'), 0)
Mobile.verifyEqual(title,text)

Mobile.tap(findTestObject('Object Repository/title'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.Button'), 0)

Mobile.tap(findTestObject('Object Repository/android.widget.Button - OK (1)'), 0)

Mobile.verifyElementNotExist(findTestObject('Object Repository/title'), 10)

Mobile.closeApplication()

