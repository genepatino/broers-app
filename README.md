# Broers APP

<p>
Broer App was developed with React, and react-router-dom for the management of routes and environment variables to preserve the security of different keys and tokens.

The hooks implemented during the application were "useState, useContext, useEffect, useRef, useNavigate, useParams".

Styled-components were implemented for the application styles.

and external libraries such as: And Design, SweetAlert, reCAPTCHA to meet the requirements.

Broer App starts with a LogIn that has 2 filters to access the following view (previously established username and password and reCaptcha authentication). If any of these are not met, the user will not be able to access the following view (Character Table).

The following view is a <table> that shows the image and name of all the characters. By clicking on their name, you can access the following view (CharacterDetails) that shows the details of said character.

To obtain the character information, the "id" of the URL was captured to query the Marvel Developer Portal API.

</p>
