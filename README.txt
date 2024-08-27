Ten projekt zostanie podzielony na 2 części :

- backend
	Technologie użyte:
	 - Node.js (server)
	 - Typescript (types)
	 - Prisma (ORM)
	 - PostgreSQL (Database)
	 - Mailtrap (Sending Emails)
	 - Jest (Tests)
	Funkcjonalności:
	 - autentykacja / autoryzacja (logowanie, rejestrowanie, przypominanie hasła, wysyłanie hasła mailem po stworzeniu konta, wysyłanie maila z hasłem przy przypomnieniu hasła)
	 - dodawanie, edycja, usuwanie przedsiębiorstw
	 - dodawanie, edytowanie, usuwanie działów w przedsiębiorstwie
	 - dodawanie, edycja, usuwanie pracowników w przedsiębiorstwach /działach
	 - drukowanie i wysyłanie mailem szkoleń, pozwoleń, zwolnień i innych dokumentów
	 - działanie w tle przypominania o zbliżających się szkoleniach
	 - wykupowanie pakietu dostępu do aplikacji (w przyszłości - STRIPE)
	 - kilka poziomów uprawnień w zależności od wykupionego dostępu
 
- frontend
	Technologie użyte:
	 - React
	 - Typescript
	 - SASS
	 - Parcel (bundle)
	 - ES lint (code analysis)
	 - Redux (state handling)
	 
	Funkcjonalności: 
	 - panel użytkownika / widok główny
	 - lista przedsiębiorstw
	 - lista działów w przedbsiębiorstwie
	 - lista pracowników