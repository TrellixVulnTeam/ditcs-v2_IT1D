var res = {'data':'HTTP/1.1 500 Internal Server Error\x0aDate: Sun, 01 Aug 2021 14:17:35 GMT\x0aServer: WSGIServer/0.2 CPython/3.9.2\x0aContent-Type: text/plain; charset=utf-8\x0aX-Frame-Options: DENY\x0aContent-Length: 17588\x0aVary: Cookie\x0aX-Content-Type-Options: nosniff\x0aReferrer-Policy: same-origin\x0a\x0aTypeError at /api/refresh/\x0a__init__() takes 1 positional argument but 2 were given\x0a\x0aRequest Method: GET\x0aRequest URL: http://127.0.0.1:8000/api/refresh/\x0aDjango Version: 3.2.5\x0aPython Executable: /home/kento/Project/Ditcs-v2/venv/bin/python\x0aPython Version: 3.9.2\x0aPython Path: [\x27/home/kento/Project/Filly/ditcs-v2\x27, \x27/usr/lib/python39.zip\x27, \x27/usr/lib/python3.9\x27, \x27/usr/lib/python3.9/lib-dynload\x27, \x27/home/kento/Project/Ditcs-v2/venv/lib/python3.9/site-packages\x27]\x0aServer time: Sun, 01 Aug 2021 14:17:35 +0000\x0aInstalled Applications:\x0a[\x27django.contrib.admin\x27,\x0a \x27django.contrib.auth\x27,\x0a \x27django.contrib.contenttypes\x27,\x0a \x27django.contrib.sessions\x27,\x0a \x27django.contrib.messages\x27,\x0a \x27django.contrib.staticfiles\x27,\x0a \x27rest_framework\x27,\x0a \x27django_extensions\x27,\x0a \x27traffic\x27,\x0a \x27bootstrap_modal_forms\x27]\x0aInstalled Middleware:\x0a(\x27whitenoise.middleware.WhiteNoiseMiddleware\x27,\x0a \x27django.middleware.security.SecurityMiddleware\x27,\x0a \x27django.contrib.sessions.middleware.SessionMiddleware\x27,\x0a \x27django.middleware.common.CommonMiddleware\x27,\x0a \x27django.middleware.csrf.CsrfViewMiddleware\x27,\x0a \x27django.contrib.auth.middleware.AuthenticationMiddleware\x27,\x0a \x27django.contrib.messages.middleware.MessageMiddleware\x27,\x0a \x27django.middleware.clickjacking.XFrameOptionsMiddleware\x27)\x0a\x0a\x0aTraceback (most recent call last):\x0a  File \x22/home/kento/Project/Ditcs-v2/venv/lib/python3.9/site-packages/django/core/handlers/exception.py\x22, line 47, in inner\x0a    response = get_response(request)\x0a  File \x22/home/kento/Project/Ditcs-v2/venv/lib/python3.9/site-packages/django/core/handlers/base.py\x22, line 181, in _get_response\x0a    response = wrapped_callback(request, *callback_args, **callback_kwargs)\x0a\x0aException Type: TypeError at /api/refresh/\x0aException Value: __init__() takes 1 positional argument but 2 were given\x0aRequest information:\x0aUSER: AnonymousUser\x0a\x0aGET: No GET data\x0a\x0aPOST: No POST data\x0a\x0aFILES: No FILES data\x0a\x0aCOOKIES:\x0acsrftoken = \x27tkXIhmYdd9AGVMZ0RfeweDEOvFLXB77PlRBmDTPJHLPP2vVT4e82ZdtT559Zzy6s\x27\x0a\x0aMETA:\x0aBYOBU_ACCENT = \x27\x5c\x5c#75507B\x27\x0aBYOBU_BACKEND = \x27tmux\x27\x0aBYOBU_CHARMAP = \x27UTF-8\x27\x0aBYOBU_CONFIG_DIR = \x27/home/kento/.byobu\x27\x0aBYOBU_DARK = \x27\x5c\x5c#333333\x27\x0aBYOBU_DATE = \x27%Y-%m-%d \x27\x0aBYOBU_DISTRO = \x27Parrot OS\x27\x0aBYOBU_EDITOR = \x27sensible-editor\x27\x0aBYOBU_HIGHLIGHT = \x27\x5c\x5c#DD4814\x27\x0aBYOBU_LIGHT = \x27\x5c\x5c#EEEEEE\x27\x0aBYOBU_PAGER = \x27sensible-pager\x27\x0aBYOBU_PREFIX = \x27/usr\x27\x0aBYOBU_PYTHON = \x27python3\x27\x0aBYOBU_READLINK = \x27readlink\x27\x0aBYOBU_RUN_DIR = \x27/dev/shm/byobu-kento-rLqk9TuQ\x27\x0aBYOBU_SED = \x27sed\x27\x0aBYOBU_TERM = \x27screen-256color\x27\x0aBYOBU_TIME = \x27%H:%M:%S\x27\x0aBYOBU_TTY = \x27/dev/pts/1\x27\x0aBYOBU_ULIMIT = \x27ulimit\x27\x0aBYOBU_WINDOW_NAME = \x27-\x27\x0aCOLORFGBG = \x2715;0\x27\x0aCOLORTERM = \x27truecolor\x27\x0aCONDA_EXE = \x27/home/kento/anaconda3/bin/conda\x27\x0aCONDA_PYTHON_EXE = \x27/home/kento/anaconda3/bin/python\x27\x0aCONDA_SHLVL = \x270\x27\x0aCONTENT_LENGTH = \x27\x27\x0aCONTENT_TYPE = \x27text/plain\x27\x0aCSRF_COOKIE = \x27tkXIhmYdd9AGVMZ0RfeweDEOvFLXB77PlRBmDTPJHLPP2vVT4e82ZdtT559Zzy6s\x27\x0aDBUS_SESSION_BUS_ADDRESS = \x27unix:path=/run/user/1000/bus\x27\x0aDESKTOP_SESSION = \x27plasma\x27\x0aDISPLAY = \x27:0\x27\x0aDJANGO_SETTINGS_MODULE = \x27DITCS.settings\x27\x0aGATEWAY_INTERFACE = \x27CGI/1.1\x27\x0aGDMSESSION = \x27plasma\x27\x0aGPG_AGENT_INFO = \x27/run/user/1000/gnupg/S.gpg-agent:0:1\x27\x0aGTK2_RC_FILES = \x27/etc/gtk-2.0/gtkrc:/home/kento/.gtkrc-2.0:/home/kento/.config/gtkrc-2.0\x27\x0aGTK_MODULES = \x27gail:atk-bridge\x27\x0aGTK_RC_FILES = \x27/etc/gtk/gtkrc:/home/kento/.gtkrc:/home/kento/.config/gtkrc\x27\x0aHOME = \x27/home/kento\x27\x0aHTTP_ACCEPT = \x27skip/fish;\x27\x0aHTTP_ACCEPT_ENCODING = \x27gzip\x27\x0aHTTP_CONNECTION = \x27keep-alive\x27\x0aHTTP_COOKIE = \x27csrftoken=tkXIhmYdd9AGVMZ0RfeweDEOvFLXB77PlRBmDTPJHLPP2vVT4e82ZdtT559Zzy6s\x27\x0aHTTP_HOST = \x27127.0.0.1:8000\x27\x0aHTTP_RANGE = \x27bytes=0-399999\x27\x0aHTTP_REFERER = \x27http://127.0.0.1/\x27\x0aHTTP_USER_AGENT = \x27Mozilla/5.0 SF/2.10b\x27\x0aKDE_APPLICATIONS_AS_SCOPE = \x271\x27\x0aKDE_FULL_SESSION = \x27true\x27\x0aKDE_SESSION_UID = \x271000\x27\x0aKDE_SESSION_VERSION = \x275\x27\x0aKONSOLE_DBUS_SERVICE = \x27:1.62\x27\x0aKONSOLE_DBUS_SESSION = \x27/Sessions/1\x27\x0aKONSOLE_DBUS_WINDOW = \x27/Windows/1\x27\x0aKONSOLE_VERSION = \x27201203\x27\x0aLANG = \x27en_US.UTF-8\x27\x0aLANGUAGE = \x27\x27\x0aLC_ADDRESS = \x27sw_TZ\x27\x0aLC_IDENTIFICATION = \x27sw_TZ\x27\x0aLC_MEASUREMENT = \x27sw_TZ\x27\x0aLC_MONETARY = \x27sw_TZ\x27\x0aLC_NAME = \x27sw_TZ\x27\x0aLC_NUMERIC = \x27sw_TZ\x27\x0aLC_PAPER = \x27sw_TZ\x27\x0aLC_TELEPHONE = \x27sw_TZ\x27\x0aLC_TIME = \x27sw_TZ\x27\x0aLOGNAME = \x27kento\x27\x0aLS_COLORS = \x27rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:\x27\x0aOLDPWD = \x27/home/kento\x27\x0aPATH = \x27/home/kento/Project/Ditcs-v2/venv/bin:/home/kento/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:/home/kento/anaconda3/condabin:/home/kento/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games\x27\x0aPATH_INFO = \x27/api/refresh/\x27\x0aPROFILEHOME = \x27\x27\x0aPS1 = \x27(venv) \x5c\x5c[\x5c\x5ce[31m\x5c\x5c]$(byobu_prompt_status)\x5c\x5c[\x5c\x5ce[38;5;69m\x5c\x5c]\x5c\x5cu\x5c\x5c[\x5c\x5ce[38;5;214m\x5c\x5c]@\x5c\x5c[\x5c\x5ce[38;5;167m\x5c\x5c]\x5c\x5ch\x5c\x5c[\x5c\x5ce[38;5;214m\x5c\x5c]:\x5c\x5c[\x5c\x5ce[38;5;71m\x5c\x5c]\x5c\x5cw\x5c\x5c[\x5c\x5ce[38;5;214m\x5c\x5c]$(byobu_prompt_symbol)\x5c\x5c[\x5c\x5ce[00m\x5c\x5c] \x27\x0aPWD = \x27/home/kento/Project/Filly/ditcs-v2\x27\x0aQT_ACCESSIBILITY = \x271\x27\x0aQT_AUTO_SCREEN_SCALE_FACTOR = \x270\x27\x0aQUERY_STRING = \x27\x27\x0aREMOTE_ADDR = \x27127.0.0.1\x27\x0aREMOTE_HOST = \x27\x27\x0aREQUEST_METHOD = \x27GET\x27\x0aRUN_MAIN = \x27true\x27\x0aSCRIPT_NAME = \x27\x27\x0aSERVER_NAME = \x27localhost\x27\x0aSERVER_PORT = \x278000\x27\x0aSERVER_PROTOCOL = \x27HTTP/1.1\x27\x0aSERVER_SOFTWARE = \x27WSGIServer/0.2\x27\x0aSESSION_MANAGER = \x27local/kento:@/tmp/.ICE-unix/1454,unix/kento:/tmp/.ICE-unix/1454\x27\x0aSHELL = \x27/bin/bash\x27\x0aSHELL_SESSION_ID = \x277fc06e2d60ed4ec080befb8052c7b2c7\x27\x0aSHLVL = \x272\x27\x0aSSH_AGENT_PID = \x271365\x27\x0aSSH_AUTH_SOCK = \x27/home/kento/.byobu/.ssh-agent\x27\x0aTERM = \x27screen-256color\x27\x0aTMUX = \x27/tmp/tmux-1000/default,1916,1\x27\x0aTMUX_PANE = \x27%1\x27\x0aTZ = \x27UTC\x27\x0aUSER = \x27kento\x27\x0aVIRTUAL_ENV = \x27/home/kento/Project/Ditcs-v2/venv\x27\x0aWINDOWID = \x276291463\x27\x0aXAUTHORITY = \x27/home/kento/.Xauthority\x27\x0aXCURSOR_SIZE = \x2724\x27\x0aXCURSOR_THEME = \x27breeze_cursors\x27\x0aXDG_CURRENT_DESKTOP = \x27KDE\x27\x0aXDG_GREETER_DATA_DIR = \x27/var/lib/lightdm/data/kento\x27\x0aXDG_RUNTIME_DIR = \x27/run/user/1000\x27\x0aXDG_SEAT = \x27seat0\x27\x0aXDG_SEAT_PATH = \x27/org/freedesktop/DisplayManager/Seat0\x27\x0aXDG_SESSION_CLASS = \x27user\x27\x0aXDG_SESSION_DESKTOP = \x27plasma\x27\x0aXDG_SESSION_ID = \x272\x27\x0aXDG_SESSION_PATH = \x27/org/freedesktop/DisplayManager/Session0\x27\x0aXDG_SESSION_TYPE = \x27x11\x27\x0aXDG_VTNR = \x277\x27\x0a_ = \x27/home/kento/Project/Ditcs-v2/venv/bin/python\x27\x0a_CE_CONDA = \x27\x27\x0a_CE_M = \x27\x27\x0awsgi.errors = \x3c_io.TextIOWrapper name=\x27\x3cstderr\x3e\x27 mode=\x27w\x27 encoding=\x27utf-8\x27\x3e\x0awsgi.file_wrapper = \x3cclass \x27wsgiref.util.FileWrapper\x27\x3e\x0awsgi.input = \x3cdjango.core.handlers.wsgi.LimitedStream object at 0x7fed200211c0\x3e\x0awsgi.multiprocess = False\x0awsgi.multithread = True\x0awsgi.run_once = False\x0awsgi.url_scheme = \x27http\x27\x0awsgi.version = \x27(1, 0)\x27\x0a\x0aSettings:\x0aUsing settings module DITCS.settings\x0aABSOLUTE_URL_OVERRIDES = {}\x0aADMINS = []\x0aALLOWED_HOSTS = [\x27*\x27]\x0aAPPEND_SLASH = True\x0aAUTHENTICATION_BACKENDS = [\x27django.contrib.auth.backends.ModelBackend\x27]\x0aAUTH_PASSWORD_VALIDATORS = \x27********************\x27\x0aAUTH_USER_MODEL = \x27auth.User\x27\x0aBASE_DIR = PosixPath(\x27/home/kento/Project/Filly/ditcs-v2\x27)\x0aCACHES = {\x27default\x27: {\x27BACKEND\x27: \x27django.core.cache.backends.locmem.LocMemCache\x27}}\x0aCACHE_MIDDLEWARE_ALIAS = \x27default\x27\x0aCACHE_MIDDLEWARE_KEY_PREFIX = \x27********************\x27\x0aCACHE_MIDDLEWARE_SECONDS = 600\x0aCSRF_COOKIE_AGE = 31449600\x0aCSRF_COOKIE_DOMAIN = None\x0aCSRF_COOKIE_HTTPONLY = False\x0aCSRF_COOKIE_NAME = \x27csrftoken\x27\x0aCSRF_COOKIE_PATH = \x27/\x27\x0aCSRF_COOKIE_SAMESITE = \x27Lax\x27\x0aCSRF_COOKIE_SECURE = False\x0aCSRF_FAILURE_VIEW = \x27django.views.csrf.csrf_failure\x27\x0aCSRF_HEADER_NAME = \x27HTTP_X_CSRFTOKEN\x27\x0aCSRF_TRUSTED_ORIGINS = []\x0aCSRF_USE_SESSIONS = False\x0aDATABASES = {\x27default\x27: {\x27ENGINE\x27: \x27django.db.backends.sqlite3\x27, \x27NAME\x27: PosixPath(\x27/home/kento/Project/Filly/ditcs-v2/db2.sqlite3\x27), \x27ATOMIC_REQUESTS\x27: False, \x27AUTOCOMMIT\x27: True, \x27CONN_MAX_AGE\x27: 0, \x27OPTIONS\x27: {}, \x27TIME_ZONE\x27: None, \x27USER\x27: \x27\x27, \x27PASSWORD\x27: \x27********************\x27, \x27HOST\x27: \x27\x27, \x27PORT\x27: \x27\x27, \x27TEST\x27: {\x27CHARSET\x27: None, \x27COLLATION\x27: None, \x27MIGRATE\x27: True, \x27MIRROR\x27: None, \x27NAME\x27: None}}}\x0aDATABASE_ROUTERS = []\x0aDATA_UPLOAD_MAX_MEMORY_SIZE = 2621440\x0aDATA_UPLOAD_MAX_NUMBER_FIELDS = 1000\x0aDATETIME_FORMAT = \x27N j, Y, P\x27\x0aDATETIME_INPUT_FORMATS = [\x27%Y-%m-%d %H:%M:%S\x27, \x27%Y-%m-%d %H:%M:%S.%f\x27, \x27%Y-%m-%d %H:%M\x27, \x27%m/%d/%Y %H:%M:%S\x27, \x27%m/%d/%Y %H:%M:%S.%f\x27, \x27%m/%d/%Y %H:%M\x27, \x27%m/%d/%y %H:%M:%S\x27, \x27%m/%d/%y %H:%M:%S.%f\x27, \x27%m/%d/%y %H:%M\x27]\x0aDATE_FORMAT = \x27N j, Y\x27\x0aDATE_INPUT_FORMATS = [\x27%Y-%m-%d\x27, \x27%m/%d/%Y\x27, \x27%m/%d/%y\x27, \x27%b %d %Y\x27, \x27%b %d, %Y\x27, \x27%d %b %Y\x27, \x27%d %b, %Y\x27, \x27%B %d %Y\x27, \x27%B %d, %Y\x27, \x27%d %B %Y\x27, \x27%d %B, %Y\x27]\x0aDEBUG = True\x0aDEBUG_PROPAGATE_EXCEPTIONS = False\x0aDECIMAL_SEPARATOR = \x27.\x27\x0aDEFAULT_AUTO_FIELD = \x27django.db.models.BigAutoField\x27\x0aDEFAULT_CHARSET = \x27utf-8\x27\x0aDEFAULT_EXCEPTION_REPORTER = \x27django.views.debug.ExceptionReporter\x27\x0aDEFAULT_EXCEPTION_REPORTER_FILTER = \x27django.views.debug.SafeExceptionReporterFilter\x27\x0aDEFAULT_FILE_STORAGE = \x27django.core.files.storage.FileSystemStorage\x27\x0aDEFAULT_FROM_EMAIL = \x27webmaster@localhost\x27\x0aDEFAULT_HASHING_ALGORITHM = \x27sha256\x27\x0aDEFAULT_INDEX_TABLESPACE = \x27\x27\x0aDEFAULT_TABLESPACE = \x27\x27\x0aDISALLOWED_USER_AGENTS = []\x0aEMAIL_BACKEND = \x27django.core.mail.backends.smtp.EmailBackend\x27\x0aEMAIL_HOST = \x27localhost\x27\x0aEMAIL_HOST_PASSWORD = \x27********************\x27\x0aEMAIL_HOST_USER = \x27\x27\x0aEMAIL_PORT = 25\x0aEMAIL_SSL_CERTFILE = None\x0aEMAIL_SSL_KEYFILE = \x27********************\x27\x0aEMAIL_SUBJECT_PREFIX = \x27[Django] \x27\x0aEMAIL_TIMEOUT = None\x0aEMAIL_USE_LOCALTIME = False\x0aEMAIL_USE_SSL = False\x0aEMAIL_USE_TLS = False\x0aFILE_UPLOAD_DIRECTORY_PERMISSIONS = None\x0aFILE_UPLOAD_HANDLERS = [\x27django.core.files.uploadhandler.MemoryFileUploadHandler\x27, \x27django.core.files.uploadhandler.TemporaryFileUploadHandler\x27]\x0aFILE_UPLOAD_MAX_MEMORY_SIZE = 2621440\x0aFILE_UPLOAD_PERMISSIONS = 420\x0aFILE_UPLOAD_TEMP_DIR = None\x0aFIRST_DAY_OF_WEEK = 0\x0aFIXTURE_DIRS = []\x0aFORCE_SCRIPT_NAME = None\x0aFORMAT_MODULE_PATH = None\x0aFORM_RENDERER = \x27django.forms.renderers.DjangoTemplates\x27\x0aIGNORABLE_404_URLS = []\x0aINSTALLED_APPS = [\x27django.contrib.admin\x27, \x27django.contrib.auth\x27, \x27django.contrib.contenttypes\x27, \x27django.contrib.sessions\x27, \x27django.contrib.messages\x27, \x27django.contrib.staticfiles\x27, \x27rest_framework\x27, \x27django_extensions\x27, \x27traffic\x27, \x27bootstrap_modal_forms\x27]\x0aINTERNAL_IPS = []\x0aLANGUAGES = [(\x27af\x27, \x27Afrikaans\x27), (\x27ar\x27, \x27Arabic\x27), (\x27ar-dz\x27, \x27Algerian Arabic\x27), (\x27ast\x27, \x27Asturian\x27), (\x27az\x27, \x27Azerbaijani\x27), (\x27bg\x27, \x27Bulgarian\x27), (\x27be\x27, \x27Belarusian\x27), (\x27bn\x27, \x27Bengali\x27), (\x27br\x27, \x27Breton\x27), (\x27bs\x27, \x27Bosnian\x27), (\x27ca\x27, \x27Catalan\x27), (\x27cs\x27, \x27Czech\x27), (\x27cy\x27, \x27Welsh\x27), (\x27da\x27, \x27Danish\x27), (\x27de\x27, \x27German\x27), (\x27dsb\x27, \x27Lower Sorbian\x27), (\x27el\x27, \x27Greek\x27), (\x27en\x27, \x27English\x27), (\x27en-au\x27, \x27Australian English\x27), (\x27en-gb\x27, \x27British English\x27), (\x27eo\x27, \x27Esperanto\x27), (\x27es\x27, \x27Spanish\x27), (\x27es-ar\x27, \x27Argentinian Spanish\x27), (\x27es-co\x27, \x27Colombian Spanish\x27), (\x27es-mx\x27, \x27Mexican Spanish\x27), (\x27es-ni\x27, \x27Nicaraguan Spanish\x27), (\x27es-ve\x27, \x27Venezuelan Spanish\x27), (\x27et\x27, \x27Estonian\x27), (\x27eu\x27, \x27Basque\x27), (\x27fa\x27, \x27Persian\x27), (\x27fi\x27, \x27Finnish\x27), (\x27fr\x27, \x27French\x27), (\x27fy\x27, \x27Frisian\x27), (\x27ga\x27, \x27Irish\x27), (\x27gd\x27, \x27Scottish Gaelic\x27), (\x27gl\x27, \x27Galician\x27), (\x27he\x27, \x27Hebrew\x27), (\x27hi\x27, \x27Hindi\x27), (\x27hr\x27, \x27Croatian\x27), (\x27hsb\x27, \x27Upper Sorbian\x27), (\x27hu\x27, \x27Hungarian\x27), (\x27hy\x27, \x27Armenian\x27), (\x27ia\x27, \x27Interlingua\x27), (\x27id\x27, \x27Indonesian\x27), (\x27ig\x27, \x27Igbo\x27), (\x27io\x27, \x27Ido\x27), (\x27is\x27, \x27Icelandic\x27), (\x27it\x27, \x27Italian\x27), (\x27ja\x27, \x27Japanese\x27), (\x27ka\x27, \x27Georgian\x27), (\x27kab\x27, \x27Kabyle\x27), (\x27kk\x27, \x27Kazakh\x27), (\x27km\x27, \x27Khmer\x27), (\x27kn\x27, \x27Kannada\x27), (\x27ko\x27, \x27Korean\x27), (\x27ky\x27, \x27Kyrgyz\x27), (\x27lb\x27, \x27Luxembourgish\x27), (\x27lt\x27, \x27Lithuanian\x27), (\x27lv\x27, \x27Latvian\x27), (\x27mk\x27, \x27Macedonian\x27), (\x27ml\x27, \x27Malayalam\x27), (\x27mn\x27, \x27Mongolian\x27), (\x27mr\x27, \x27Marathi\x27), (\x27my\x27, \x27Burmese\x27), (\x27nb\x27, \x27Norwegian Bokm\xc3\xa5l\x27), (\x27ne\x27, \x27Nepali\x27), (\x27nl\x27, \x27Dutch\x27), (\x27nn\x27, \x27Norwegian Nynorsk\x27), (\x27os\x27, \x27Ossetic\x27), (\x27pa\x27, \x27Punjabi\x27), (\x27pl\x27, \x27Polish\x27), (\x27pt\x27, \x27Portuguese\x27), (\x27pt-br\x27, \x27Brazilian Portuguese\x27), (\x27ro\x27, \x27Romanian\x27), (\x27ru\x27, \x27Russian\x27), (\x27sk\x27, \x27Slovak\x27), (\x27sl\x27, \x27Slovenian\x27), (\x27sq\x27, \x27Albanian\x27), (\x27sr\x27, \x27Serbian\x27), (\x27sr-latn\x27, \x27Serbian Latin\x27), (\x27sv\x27, \x27Swedish\x27), (\x27sw\x27, \x27Swahili\x27), (\x27ta\x27, \x27Tamil\x27), (\x27te\x27, \x27Telugu\x27), (\x27tg\x27, \x27Tajik\x27), (\x27th\x27, \x27Thai\x27), (\x27tk\x27, \x27Turkmen\x27), (\x27tr\x27, \x27Turkish\x27), (\x27tt\x27, \x27Tatar\x27), (\x27udm\x27, \x27Udmurt\x27), (\x27uk\x27, \x27Ukrainian\x27), (\x27ur\x27, \x27Urdu\x27), (\x27uz\x27, \x27Uzbek\x27), (\x27vi\x27, \x27Vietnamese\x27), (\x27zh-hans\x27, \x27Simplified Chinese\x27), (\x27zh-hant\x27, \x27Traditional Chinese\x27)]\x0aLANGUAGES_BIDI = [\x27he\x27, \x27ar\x27, \x27ar-dz\x27, \x27fa\x27, \x27ur\x27]\x0aLANGUAGE_CODE = \x27en-us\x27\x0aLANGUAGE_COOKIE_AGE = None\x0aLANGUAGE_COOKIE_DOMAIN = None\x0aLANGUAGE_COOKIE_HTTPONLY = False\x0aLANGUAGE_COOKIE_NAME = \x27django_language\x27\x0aLANGUAGE_COOKIE_PATH = \x27/\x27\x0aLANGUAGE_COOKIE_SAMESITE = None\x0aLANGUAGE_COOKIE_SECURE = False\x0aLOCALE_PATHS = []\x0aLOGGING = {\x27version\x27: 1, \x27disable_existing_loggers\x27: False, \x27formatters\x27: {\x27verbose\x27: {\x27format\x27: \x27%(asctime)s [%(process)d] [%(levelname)s] pathname=%(pathname)s lineno=%(lineno)s funcname=%(funcName)s %(message)s\x27, \x27datefmt\x27: \x27%Y-%m-%d %H:%M:%S\x27}, \x27simple\x27: {\x27format\x27: \x27%(levelname)s %(message)s\x27}}, \x27handlers\x27: {\x27null\x27: {\x27level\x27: \x27DEBUG\x27, \x27class\x27: \x27logging.NullHandler\x27}, \x27console\x27: {\x27level\x27: \x27DEBUG\x27, \x27class\x27: \x27logging.StreamHandler\x27, \x27formatter\x27: \x27verbose\x27}}, \x27loggers\x27: {\x27testlogger\x27: {\x27handlers\x27: [\x27console\x27], \x27level\x27: \x27INFO\x27}}}\x0aLOGGING_CONFIG = \x27logging.config.dictConfig\x27\x0aLOGIN_REDIRECT_URL = \x27/accounts/profile/\x27\x0aLOGIN_URL = \x27/admin/login\x27\x0aLOGOUT_REDIRECT_URL = None\x0aMANAGERS = []\x0aMEDIA_ROOT = \x27/home/kento/Project/Filly/ditcs-v2/media\x27\x0aMEDIA_URL = \x27/media/\x27\x0aMESSAGE_STORAGE = \x27django.contrib.messages.storage.fallback.FallbackStorage\x27\x0aMIDDLEWARE = \x22(\x27whitenoise.middleware.WhiteNoiseMiddleware\x27, \x27django.middleware.security.SecurityMiddleware\x27, \x27django.contrib.sessions.middleware.SessionMiddleware\x27, \x27django.middleware.common.CommonMiddleware\x27, \x27django.middleware.csrf.CsrfViewMiddleware\x27, \x27django.contrib.auth.middleware.AuthenticationMiddleware\x27, \x27django.contrib.messages.middleware.MessageMiddleware\x27, \x27django.middleware.clickjacking.XFrameOptionsMiddleware\x27)\x22\x0aMIGRATION_MODULES = {}\x0aMONTH_DAY_FORMAT = \x27F j\x27\x0aNUMBER_GROUPING = 0\x0aPASSWORD_HASHERS = \x27********************\x27\x0aPASSWORD_RESET_TIMEOUT = \x27********************\x27\x0aPASSWORD_RESET_TIMEOUT_DAYS = \x27********************\x27\x0aPREPEND_WWW = False\x0aROOT_URLCONF = \x27DITCS.urls\x27\x0aSECRET_KEY = \x27********************\x27\x0aSECURE_BROWSER_XSS_FILTER = False\x0aSECURE_CONTENT_TYPE_NOSNIFF = True\x0aSECURE_HSTS_INCLUDE_SUBDOMAINS = False\x0aSECURE_HSTS_PRELOAD = False\x0aSECURE_HSTS_SECONDS = 0\x0aSECURE_PROXY_SSL_HEADER = None\x0aSECURE_REDIRECT_EXEMPT = []\x0aSECURE_REFERRER_POLICY = \x27same-origin\x27\x0aSECURE_SSL_HOST = None\x0aSECURE_SSL_REDIRECT = False\x0aSERVER_EMAIL = \x27root@localhost\x27\x0aSESSION_CACHE_ALIAS = \x27default\x27\x0aSESSION_COOKIE_AGE = 1209600\x0aSESSION_COOKIE_DOMAIN = None\x0aSESSION_COOKIE_HTTPONLY = True\x0aSESSION_COOKIE_NAME = \x27sessionid\x27\x0aSESSION_COOKIE_PATH = \x27/\x27\x0aSESSION_COOKIE_SAMESITE = \x27Lax\x27\x0aSESSION_COOKIE_SECURE = False\x0aSESSION_ENGINE = \x27django.contrib.sessions.backends.db\x27\x0aSESSION_EXPIRE_AT_BROWSER_CLOSE = False\x0aSESSION_FILE_PATH = None\x0aSESSION_SAVE_EVERY_REQUEST = False\x0aSESSION_SERIALIZER = \x27django.contrib.sessions.serializers.JSONSerializer\x27\x0aSETTINGS_MODULE = \x27DITCS.settings\x27\x0aSHORT_DATETIME_FORMAT = \x27m/d/Y P\x27\x0aSHORT_DATE_FORMAT = \x27m/d/Y\x27\x0aSIGNING_BACKEND = \x27django.core.signing.TimestampSigner\x27\x0aSILENCED_SYSTEM_CHECKS = []\x0aSTATICFILES_DIRS = []\x0aSTATICFILES_FINDERS = [\x27django.contrib.staticfiles.finders.FileSystemFinder\x27, \x27django.contrib.staticfiles.finders.AppDirectoriesFinder\x27]\x0aSTATICFILES_STORAGE = \x27whitenoise.storage.CompressedManifestStaticFilesStorage\x27\x0aSTATIC_ROOT = \x27/home/kento/Project/Filly/ditcs-v2/staticfiles\x27\x0aSTATIC_URL = \x27/static/\x27\x0aTEMPLATES = [{\x27BACKEND\x27: \x27django.template.backends.django.DjangoTemplates\x27, \x27DIRS\x27: [], \x27APP_DIRS\x27: True, \x27OPTIONS\x27: {\x27context_processors\x27: [\x27django.template.context_processors.debug\x27, \x27django.template.context_processors.request\x27, \x27django.contrib.auth.context_processors.auth\x27, \x27django.contrib.messages.context_processors.messages\x27]}}]\x0aTEST_NON_SERIALIZED_APPS = []\x0aTEST_RUNNER = \x27django.test.runner.DiscoverRunner\x27\x0aTHOUSAND_SEPARATOR = \x27,\x27\x0aTIME_FORMAT = \x27P\x27\x0aTIME_INPUT_FORMATS = [\x27%H:%M:%S\x27, \x27%H:%M:%S.%f\x27, \x27%H:%M\x27]\x0aTIME_ZONE = \x27UTC\x27\x0aUSE_I18N = True\x0aUSE_L10N = True\x0aUSE_THOUSAND_SEPARATOR = False\x0aUSE_TZ = True\x0aUSE_X_FORWARDED_HOST = False\x0aUSE_X_FORWARDED_PORT = False\x0aWSGI_APPLICATION = \x27DITCS.wsgi.application\x27\x0aX_FRAME_OPTIONS = \x27DENY\x27\x0aYEAR_MONTH_FORMAT = \x27F Y\x27\x0a\x0a\x0aYou\xe2\x80\x99re seeing this error because you have DEBUG = True in your\x0aDjango settings file. Change that to False, and Django will\x0adisplay a standard page generated by the handler for this status code.\x0a\x0aesponse\x0a    re\xd1D'}