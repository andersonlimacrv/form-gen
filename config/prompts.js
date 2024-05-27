export function createFormPrompt({ userInput }) {
    if (!userInput || typeof userInput !== 'string') {
        throw new Error('Invalid userInput: must be a non-empty string.');
    }

    const PROMPT_TEMPLATE = `
      Description: ${userInput} 
      On the basis of description, please give form in JSON format with:
      - Form title
      - Form subheading
      - Form fields
      - Field name
      - Field Placeholder name
      - Field label
      - Field type
      - Field required:
      - Field options: only if field type is select, radio, or checkbox

      Use the following JSON format:

      {
        formTitle: 'A simple title related to the form and description',
        formSubheading: 'A subheading for the form',
        formFields: [
          { /* Exemple for text type */
            fieldName: 'Name of the field',
            fieldPlaceholder: 'Enter your full name',
            fieldLabel: 'Full Name',
            fieldType: 'text',
            fieldRequired: true // true or false, default is true
          },
          { /* Exemple for emails type */
            fieldName: 'email',
            fieldPlaceholder: 'Enter your email',
            fieldLabel: 'Email',
            fieldType: 'email',
            fieldRequired: true // true or false, default is true
          },
          { /* Exemple for phone type */
            fieldName: 'telefone',
            fieldPlaceholder: 'Enter your phone number',
            fieldLabel: 'Phone Number',
            fieldType: 'tel',
            fieldRequired: true // true or false, default is true
          },
          { /* Exemple for date type */
            fieldName: 'birthdate',
            fieldPlaceholder: 'Enter your birth date',
            fieldLabel: 'Birth Date',
            fieldType: 'date',
            fieldRequired: true // true or false, default is true
          },
          { /* Exemple for select type */
            fieldName: 'position',
            fieldPlaceholder: 'Select your position',
            fieldLabel: 'Position',
            fieldType: 'select',
            fieldRequired: true,
            fieldOptions:[ 'Goalkeeper', 'Wider', 'Defender', 'Midfielder', 'Forward' ]
          },
          { /* Exemple for textarea type */
            fieldName: 'experience',
            fieldPlaceholder: 'Describe your football experience',
            fieldLabel: 'Experience',
            fieldType: 'textarea',
            fieldRequired: true // true or false, default is true
          },
          { /* Exemple for checkbox type */
            fieldName: 'terms',
            fieldType: 'checkbox',
            fieldLabel: 'I have read and agree to the terms and conditions',
            fieldRequired: true, // true or false, default is true
            fieldOptions: [ 'yes', 'no' ]
          },
          { /* Exemple for radio type */
            fieldName: 'gender',
            fieldType: 'radio',
            fieldLabel: 'Gender',
            fieldRequired: true, // true or false, default is true
            fieldOptions: [ 'male', 'female' ]
          }
        ]
      }

    `;

    return PROMPT_TEMPLATE.trim();
}

