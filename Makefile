SHELL = /bin/bash

help:
	@echo "    dev"
	@echo "        Initialise virtualenv and dev requirements"
	@echo "    install"
	@echo "        Install requirements"
	@echo "    test"
	@echo "        Run tests"

dev:
	pushd backend && \
	sudo apt-get install python3-venv && \
	python3 -m venv venv && \
	printf '#!/bin/bash\nvenv/bin/pip3 "$$@"' > pip3 && \
	chmod +x pip3 && \
	printf '#!/bin/bash\nvenv/bin/python3 "$$@"' > python3 && \
	chmod +x python3 && \
	./pip3 install --upgrade pip && \
	./pip3 install -r requirements-dev.txt && \
	./pip3 install -r requirements.txt && \
	popd
	pushd frontend && \
	npm install && \
	ng build && \
	popd

install:
	pushd backend
	pip3 install -r requirements.txt
	popd
	pushd frontend
	npm install
	ng build
	popd

test:
	nosetests tests
