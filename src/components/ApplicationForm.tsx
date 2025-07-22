import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface ApplicationFormProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

const ApplicationForm = ({ currentStep, onNextStep, onPrevStep }: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    // General Information
    firstName: '',
    middleName: '',
    lastName: '',
    academicFirstName: '',
    academicMiddleName: '',
    academicLastName: '',
    dateOfBirth: '',
    
    // Contact Information
    email: 'shaiedri11403@gmail.com',
    primaryPhone: '0549719693',
    secondaryPhone: '',
    howDidYouHear: 'University or College',
    pleaseSpecify: 'Tel Aviv University',
    submittingTo: 'I completed my bachelor\'s degree in Israel',
    
    // Academic History
    credentialType: 'Bachelor\'s degree in Psychology',
    yearsOfStudy: '3',
    graduationYear: '2022',
    institution: 'Tel Aviv University',
    countryOfStudy: 'Israel',
    
    // Translation Services
    translationOption: 'I will provide a certified translation of my documents with copies of the original documents.',
    
    // Verification Services
    verificationOption: 'I will arrange for my previous institution(s) to send my official academic documents directly to SpanTran.',
    
    // Evaluation Services
    evaluationType: 'General Analysis',
    processingPeriod: '',
    evaluationPrice: '0'
  });

  const stepTitles = [
    "General Information",
    "Contact Information", 
    "Academic History",
    "Translation Services",
    "Verification Services",
    "Evaluation Services",
    "ID Upload",
    "Payment Method",
    "Processing Status"
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                To complete this form in Spanish or if you need a translation only:
                <br />
                <a href="#" className="text-primary underline">AQUÍ para Español</a>
                {" | "}
                <a href="#" className="text-primary underline">Translation Quote</a>
              </p>
            </div>

            <p className="text-foreground mb-6">
              Welcome to our online application! Please proceed below and make sure to read each step carefully.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold">Current Name</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" className="form-input" required />
                </div>
                <div>
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input id="middleName" className="form-input" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" className="form-input" required />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Name on Academic Documents</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="academicFirstName">First Name *</Label>
                  <Input id="academicFirstName" className="form-input" required />
                </div>
                <div>
                  <Label htmlFor="academicMiddleName">Middle Name</Label>
                  <Input id="academicMiddleName" className="form-input" />
                </div>
                <div>
                  <Label htmlFor="academicLastName">Last Name *</Label>
                  <Input id="academicLastName" className="form-input" required />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="dateOfBirth">Date of Birth: MM/DD/YYYY *</Label>
              <Input id="dateOfBirth" type="date" className="form-input" required />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email}
                className="form-input" 
                required 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryPhone">Primary Phone</Label>
                <Input 
                  id="primaryPhone" 
                  value={formData.primaryPhone}
                  className="form-input" 
                />
              </div>
              <div>
                <Label htmlFor="secondaryPhone">Secondary Phone</Label>
                <Input id="secondaryPhone" className="form-input" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="howDidYouHear">How did you hear about us? *</Label>
                <Select>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="University or College" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="university">University or College</SelectItem>
                    <SelectItem value="employer">Employer</SelectItem>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pleaseSpecify">Please specify: *</Label>
                <Input 
                  id="pleaseSpecify" 
                  value={formData.pleaseSpecify}
                  className="form-input" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>To whom will you be submitting your evaluation? *</Label>
              <Select>
                <SelectTrigger className="form-select">
                  <SelectValue placeholder="Employer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employer">Employer</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="licensing-board">Licensing Board</SelectItem>
                  <SelectItem value="immigration">Immigration</SelectItem>
                </SelectContent>
              </Select>
              
              <div>
                <Label htmlFor="submittingTo">Submitting to: *</Label>
                <Input 
                  id="submittingTo" 
                  value={formData.submittingTo}
                  className="form-input" 
                  required 
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Please be as specific as possible. The more we know about where you're applying, the better we can assist you.
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-foreground mb-4">
                Enter your academic and professional licensing history.
              </p>
              <p className="text-muted-foreground mb-6">
                You can include incomplete or in-progress studies too.
              </p>
            </div>

            <div>
              <Label htmlFor="credentialType">Type of Credential (Degree, Professional License, Incomplete Study etc.)</Label>
              <Input 
                id="credentialType" 
                value={formData.credentialType}
                className="form-input" 
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="yearsOfStudy">Years of Study *</Label>
                <Select>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="3" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="graduationYear">Graduation Year or Year of Issue (if applicable)</Label>
                <Input 
                  id="graduationYear" 
                  value={formData.graduationYear}
                  className="form-input" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="institution">Name of Issuing Institution or School *</Label>
                <Input 
                  id="institution" 
                  value={formData.institution}
                  className="form-input" 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="countryOfStudy">Country of Study *</Label>
                <Select>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="Israel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="israel">Israel</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="link" className="text-primary p-0">
                Add another response
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Translation Services:</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">What is a Translation?</h3>
              <p className="text-foreground mb-4">
                Translations and evaluations are not actually the same thing. Evaluations deal with equivalencies while translations deal with languages. We love languages but we do require certified English translations of all foreign-language documents. If your documents were originally issued in English, you can indicate that below and move on. If your documents were originally issued in another language, you have two options here:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground">
                <li>You can use our translation service. We'll provide a translation quote by email, after you complete the rest of this application.</li>
                <li>You can provide a certified translation from another professional translator or company. If you provide a translation completed in the United States, it must be performed by a member of the <strong>American Translators Association (ATA)</strong>. We also accept professional translations from other countries as long as the translator is officially certified within that country, but keep in mind the translation is subject to approval.</li>
              </ol>
            </div>

            <RadioGroup value={formData.translationOption} className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="english" id="english" />
                  <Label htmlFor="english" className="text-sm text-foreground">
                    My documents were originally issued in English.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="certified" id="certified" />
                  <Label htmlFor="certified" className="text-sm text-foreground">
                    I will provide a certified translation of my documents with copies of the original documents.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="quote" id="quote" />
                  <Label htmlFor="quote" className="text-sm text-foreground">
                    I need a quote for translation service.
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Verification Services:</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">What is Verification?</h3>
              <p className="text-foreground mb-4">
                Verification is the process by which we check documents for authenticity. Please read through the options below carefully.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Verification of Secondary Studies (High School)</h4>
                  <p className="text-sm text-foreground">
                    All documents are reviewed internally by TEC. Some high school documents, however, require additional verification, specifically those from Haiti, Vietnam, the Dominican Republic, as well as all WAEC and NECO results. You must choose the "Please perform verification services" option in these cases. A working "scratch card" must also be provided for WAEC/NECO results. If your highest level of study is high school or less, and you do not fall under these categories, you can choose the first option below in order to proceed with your application.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Verification of Post-Secondary Studies (College/University)</h4>
                  <p className="text-sm text-foreground">
                    All post-secondary documents require additional verification with few exceptions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Option 1 - <em>Documents Direct:</em></h4>
                  <p className="text-sm text-foreground mb-2">
                    You can arrange for your foreign university or college to send your official transcripts, degrees, certificates and/or diplomas <strong>directly</strong> to TEC by mail or by email. If you completed your program of study AND earned the name of the credential you were awarded and the date it was awarded. We will provide more instructions after you submit this application. You can provide a scan or picture of your documents to start the process, but your final evaluation will only be released upon receipt of your official documents from your foreign institution.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Option 2 - <em>TEC Verification:</em></h4>
                  <p className="text-sm text-foreground mb-2">
                    If the first option is too difficult, you can choose to use our Document Verification Service (DVS). Our verification team will then contact your previous institution to authenticate your documents. You must provide a clear copy of your foreign academic documents in order to start the process. You may also need to sign a consent form, which will be emailed to you after you submit this application.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <p className="text-sm text-foreground">
                    <strong>Please note for Option 2:</strong> Verification response time varies. The time it takes us to verify a credential is independent of the turnaround time for the evaluation. In most cases, however, we can release your evaluation while the DVS inquiry is in progress. Please also note that TEC Document Verification Service is NOT a document retrieval service. We can't request your documents for you; we can only verify the documents that you have. You will need to provide a copy of your original, official documents in order to use the DVS service.
                  </p>
                </div>
              </div>
            </div>

            <RadioGroup className="space-y-4 mt-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="direct" id="direct" />
                  <Label htmlFor="direct" className="text-sm text-foreground">
                    I will arrange for my previous institution(s) to send my official academic documents directly to SpanTran.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="verification" id="verification" />
                  <Label htmlFor="verification" className="text-sm text-foreground">
                    Please perform Verification Services for an additional cost.
                  </Label>
                </div>
              </div>
              
              <div className="mt-4">
                <Select>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 z-50">
                    <SelectItem value="standard">Standard Verification</SelectItem>
                    <SelectItem value="expedited">Expedited Verification</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  Processing times for verification services may vary depending on your country and institution of study.
                </p>
              </div>
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-foreground">
                <strong>Evaluation Services - </strong>
                <a href="#" className="text-primary underline">Click to Learn More</a>
              </p>
              
              <p className="text-foreground">
                Do you know which evaluation you need or do you need help?
              </p>

              <RadioGroup className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="know" id="know" />
                    <Label htmlFor="know" className="text-sm">I know which evaluation I need</Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="help" id="help" />
                    <Label htmlFor="help" className="text-sm">I need help choosing an evaluation service</Label>
                  </div>
                </div>
              </RadioGroup>

              <div>
                <Label htmlFor="evaluationService">Evaluation Service: *</Label>
                <RadioGroup className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general" className="text-sm">General Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="course" id="course" />
                    <Label htmlFor="course" className="text-sm">Course Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="divisional" id="divisional" />
                    <Label htmlFor="divisional" className="text-sm">Divisional Course Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nursing" id="nursing" />
                    <Label htmlFor="nursing" className="text-sm">Nursing Course Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teacher" id="teacher" />
                    <Label htmlFor="teacher" className="text-sm">Teacher's Course Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="engineering" id="engineering" />
                    <Label htmlFor="engineering" className="text-sm">Engineering Course Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="architecture" id="architecture" />
                    <Label htmlFor="architecture" className="text-sm">Architecture Course Analysis</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="processingPeriod">Please choose a processing period:</Label>
                <Select>
                  <SelectTrigger className="form-select mt-2">
                    <SelectValue placeholder="Select processing time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (15-20 business days)</SelectItem>
                    <SelectItem value="rush">Rush (10-12 business days)</SelectItem>
                    <SelectItem value="priority">Priority (5-7 business days)</SelectItem>
                    <SelectItem value="emergency">Emergency (2-3 business days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">Your evaluation price will be:</span>
                  <span className="text-red-500 font-semibold">*</span>
                </div>
                <div className="text-2xl font-bold mt-2">
                  $ <span className="ml-2">0</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">ID Upload</h3>
              <p className="text-foreground mb-4">
                You <span className="text-red-500 font-semibold">must upload at least one document</span> to continue! Please upload a scanned copy of an ID type listed below.
              </p>
            </div>

            <div>
              <p className="text-foreground mb-4">
                All applicants must provide <span className="text-primary font-semibold">ONE</span> of the following government issued forms of identification:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-foreground">
                <li><strong>State Identification</strong> (foreign or US)</li>
                <li><strong>Passport</strong></li>
                <li><strong>Permanent residency</strong></li>
                <li><strong>Naturalization paper</strong></li>
                <li><strong>Driver's license</strong> (foreign or US)</li>
              </ul>
            </div>

            <div>
              <p className="text-foreground mb-4">
                If your legal name has changed, please upload one of the following for proof of name change, in addition to your current ID. Click "Add another response" to upload multiple files.
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-foreground">
                <li><strong>Marriage license</strong></li>
                <li><strong>Driver's license</strong> (if it includes both previous and current names)</li>
                <li><strong>Naturalization certificate</strong></li>
                <li><strong>Passport information page</strong></li>
                <li><strong>Permanent residency card</strong> (green card)</li>
                <li><strong>Court-ordered name change</strong></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="mb-4">
                <p className="text-sm text-red-600 font-medium">
                  You <strong>must upload at least one document</strong> to continue! Please upload a scanned copy of an ID type listed below.
                </p>
                <p className="text-sm text-foreground mt-2">
                  All applicants must provide <strong>ONE</strong> of the following government issued forms of identification:
                </p>
              </div>

              <Label htmlFor="idUpload">Files *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <div className="space-y-2">
                  <div className="text-muted-foreground">
                    לא נבחר קובץ | בחירת קבצים
                  </div>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="link" className="text-primary p-0">
                  Add another response
                </Button>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-4">Choose Payment Method</h3>
              <p className="text-muted-foreground">Select your preferred payment method to proceed</p>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <div className="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PayPal</span>
                  </div>
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-sm text-muted-foreground">Pay with your PayPal account</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-lg font-semibold">Total: $199.00</p>
                <p className="text-sm text-muted-foreground mt-1">Document evaluation and processing fee</p>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Document Processing Status</h3>
              <p className="text-muted-foreground">Your document is being processed automatically</p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { step: 1, title: "יצוא נתונים", description: "Extracting data from uploaded documents", status: "completed" },
                { step: 2, title: "עיבוד", description: "Processing and validating information", status: "completed" },
                { step: 3, title: "תרגום", description: "Translating documents to required language", status: "active" },
                { step: 4, title: "הערכה ומחקר", description: "Academic evaluation and research", status: "pending" },
                { step: 5, title: "ייצוא מסמך", description: "Generating final evaluation report", status: "pending" }
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.status === 'completed' 
                      ? 'bg-green-100 text-green-600' 
                      : item.status === 'active'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.status === 'completed' ? '✓' : 
                     item.status === 'active' ? '⟳' : 
                     item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{item.step}. {item.title}</h4>
                      {item.status === 'active' && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600">
                <strong>Estimated completion time:</strong> 3-5 business days
              </p>
              <p className="text-xs text-blue-500 mt-1">
                You will receive an email notification once the evaluation is complete
              </p>
            </div>
          </div>
        );

      default:
        return <div>Form completed!</div>;
    }
  };

  return (
    <div className="p-8">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-foreground">
            {stepTitles[currentStep]}
          </h2>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {stepTitles.length}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-success h-1 rounded-full transition-smooth"
            style={{ width: `${((currentStep + 1) / stepTitles.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Form content */}
      <div className="mb-8">
        {renderStep()}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <Button 
          variant="outline" 
          onClick={onPrevStep}
          disabled={currentStep === 0}
          className="px-6 py-2"
        >
          Previous Page
        </Button>
        <Button 
          onClick={onNextStep}
          disabled={currentStep >= stepTitles.length - 1}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2"
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default ApplicationForm;