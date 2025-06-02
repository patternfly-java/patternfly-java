#!/usr/bin/env bash
#
#  Copyright 2023 Red Hat
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#


# --------------------------------------------------
#
# Starts the GWT/J2CL development mode for the showcase
#
# --------------------------------------------------

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

VERSION=0.0.1

# Change into the script's directory
# Using relative paths is safe!
script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)
readonly script_dir
cd "${script_dir}"

usage() {
  cat <<EOF
USAGE:
    $(basename "${BASH_SOURCE[0]}") [FLAGS] <mode>

FLAGS:
    -c, --clean         Adds the 'clean' goal
    -h, --help          Prints help information
    -v, --version       Prints version information
    --no-color          Uses plain text output

ARGS:
    <mode>              One of 'gwt' or 'j2cl'
EOF
  exit
}

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
}

setup_colors() {
  if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
    NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
  else
    # shellcheck disable=SC2034
    NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
  fi
}

msg() {
  echo >&2 -e "${1-}"
}

die() {
  local msg=$1
  local code=${2-1} # default exit status 1
  msg "$msg"
  exit "$code"
}

version() {
  msg "${BASH_SOURCE[0]} $VERSION"
  exit 0
}

parse_params() {
  CLEAN=""
  while :; do
    case "${1-}" in
    -c | --clean) CLEAN=clean ;;
    -h | --help) usage ;;
    -v | --version) version ;;
    --no-color) NO_COLOR=1 ;;
    -?*) die "Unknown option: $1" ;;
    *) break ;;
    esac
    shift
  done

  ARGS=("$@")
  [[ ${#ARGS[@]} -eq 1 ]] || die "Missing mode. Please use one of 'gwt' or 'j2cl'"
  MODE=${ARGS[0]}
  [[ "${MODE}" =~ ^(gwt|j2cl)$ ]] || die "Wrong mode. Please use one of 'gwt' or 'j2cl'"
  return 0
}

parse_params "$@"
setup_colors
if [[ "${MODE}" == "gwt" ]]; then
    LABEL=GWT
    DIRECTORY=showcase/gwt
    ARTIFACT=patternfly-java-showcase-gwt
else
    LABEL=J2CL
    DIRECTORY=showcase/j2cl
    ARTIFACT=patternfly-java-showcase-j2cl
fi
msg "Start ${YELLOW}${LABEL}${NOFORMAT} production mode..."
mvn --projects org.patternfly:${ARTIFACT} --also-make -P prod,showcase ${CLEAN} package
cd ${DIRECTORY}
mvn com.github.eirslett:frontend-maven-plugin:npm@http-server
