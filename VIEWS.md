# Dashboard

- '/'
 -statystyki dzisiejszych zamówień ( zdalne i lokalne)
 -listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/Login`
 -pola na login i hasło
 -guzik do zalogowania

# Widok dostepności stolików

- `/Tables`
    -wybór daty i godziny
    -tabela z listą rezerwacji oraz wydarzeń
    -każda kolumna = 1 stolik
    -każdy wiersz = 30 minut
    -ma przypominać widok tygdonia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    -po kliknięciu rezerwacji lub eventu, przechodzimy na strone szczegółów
- `/tables/booking/:id`
    -Zawiera wszystkie informacje dotyczące rezerwacji
    -umożliwia edycje i zapisanie zmian
- `/tables/booking/new`
    -analoginicznie do powyżej bez początkowych informacji
- `/tables/events/:id`
    -analogicznie do powyżej bez eventów
- `/tables/events/new`
    -analogcznie do powyżej dla początkowych informacji

# widok kelnera 

- `/waiter`
    -tabele 
        -w wierszach stoliki
        -w kolumnach różne rodzaje informacji(statis stolika, czas od ostatniej aktywności)
        -w ostaniej kolumnie dostępe akcjie dla danego stolika
- `/waiter/order/new`
    -numer stolika (edytowalny)
    -menu produktów 
    -opcje wybranego produktu
    -zamówienie (zamówione produkty z opcjami i cena)
    -kwota zamówienia
- `/waiter/order/:id`
    -jak powyżej

# Widok kuchni

- `/kitchen`
    -wyśwetla listę zamówienia w kolejno,sci ich złożenia
    -lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego)
        - pełne informacje dot. zamówionych dań
    - na liscie musi byc możliwość oznaczenia zamówienia jako zrealizowanego
