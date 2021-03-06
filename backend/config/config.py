import os


class BaseConfig:
    DEBUG = False
    TESTING = False
    HOST = 'localhost'
    SECRET_KEY = os.environ['SECRET_KEY']


class DevelopementConfig(BaseConfig):
    DEBUG = True
    DEVELOPMENT = True


class TestingConfig(BaseConfig):
    TESTING = True


class ProductionConfig(BaseConfig):
    pass
