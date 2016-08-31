/**
 * Created by bwang on 8/22/2016.
 */
'use strict';
// ===================================================================
var locatePartyPageurl = "../../Util/invokeParty.jspx";

//New practitioner exclusion
function openFindHealthProfessionalPage(qualfnRoleTypeCode) {
    var queryString = assembleQueryString(null, qualfnRoleTypeCode, null, null, null, null, null, 'true', 'true');
    window.open(locatePartyPageurl + "?" + queryString);
}

//Find practitioner exclusion/party registration changes
function openFindHealthProfessionalPageWithLicenseNumber(qualfnRoleTypeCode, licenseNumberFieldId) {
    var licenseNumber = getFieldValue(licenseNumberFieldId);
    var queryString = assembleQueryString(null, qualfnRoleTypeCode, null, null, null, null, licenseNumber, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString);
}

function openFindHealthProfessionalPageWithName(role, givenNameFieldId, lastNameFieldId, orgNameFieldId) {
    var givenName = getFieldValue(givenNameFieldId);
    var lastName = getFieldValue(lastNameFieldId);
    var orgName = getFieldValue(orgNameFieldId);
    var queryString = assembleQueryString(null, role, null, orgName, givenName, lastName, null, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString);
}

function openFindPharmacyPage() {
    var queryString = assembleQueryString(null, 'PHARMC', null, null, null, null, null, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString);
}

//New Registry party
function openFindPartyPage(qualfnRoleTypeCode) {
    if (qualfnRoleTypeCode === 'PHARMC') {
        var queryString = assembleQueryString(null, 'PHARMC', null, null, null, null, null, 'true', 'true');
        window.open(locatePartyPageurl + "?" + queryString);
    }
    else {
        var queryString = assembleQueryString(null, qualfnRoleTypeCode, null, null, null, null, null, 'true', 'true');
        window.open(locatePartyPageurl + "?" + queryString);
    }
}

//Find Registry party
function openFindPharmacyPageWithLicenseNumber(licenseNumberFieldId) {
    var licenseNumber = getFieldValue(licenseNumberFieldId);
    var queryString = assembleQueryString(null, 'PHARMC', null, null, null, null, licenseNumber, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString);
}

//Manual submission
function openFindPharmacyPageWithRoleTypeAndLicenseNumber(qualfnRoleTypeCode, licenseNumberFieldId) {
    var licenseNumber = getFieldValue(licenseNumberFieldId);
    var queryString = assembleQueryString(null, qualfnRoleTypeCode, null, null, null, null, licenseNumber, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString);
}

//Benefit item
function openMaintainPartyPage(profileIdFldName) {
    var profileId = getFieldValue(profileIdFldName);
    var queryString = assembleQueryString(null, 'MANUFR-DRUG', profileId, null, null, null, null, null, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
//Find practitioner exclusion/register party
function openMaintainPartyPageByProfileId(profileId) {
    var queryString = assembleQueryString(null, null, profileId, null, null, null, null, null, 'false', 'false');
    window.open(locatePartyPageurl + "?" + queryString, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

function assembleQueryString(profileType, qualRole, profileId, partyName, givenName, lastName, licenseNumber, updateServer, multipleReturns) {
    var qs = "";
    qs += buildQueryString('profileType', profileType);
    qs += buildQueryString('qualificationRole', qualRole);
    qs += buildQueryString('profileId', profileId);
    qs += buildQueryString('partyName', partyName);
    qs += buildQueryString('givenName', givenName);
    qs += buildQueryString('lastName', lastName);
    qs += buildQueryString('licenseNumber', licenseNumber);
    qs += buildQueryString('updateServer', updateServer);
    qs += buildQueryString('multipleReturns', multipleReturns);

    return qs;
}

function buildQueryString(key, value) {
    var queryString = "";
    if ((key != null) && (value != null)) {
        queryString += "&" + key + "=" + escape(value);
    }

    return queryString;
}

function setQueryResult(fieldName, fieldValue) {
    var field;
    var count = document.forms.length;
    for (var i = 0; i < count; i++) {
        field = document.forms[i].elements[getClientId(fieldName)];
        if (field != null)
            break;
    }

    if (field != null) {
        field.value = fieldValue;
    }
}

function getFieldValue(fieldId) {
    var field = document.getElementById(getClientId(fieldId));
    if (field != null) {
        return field.value;
    }

    return null;
}

function hideComponent(fieldId) {
    var field = document.getElementById(getClientId(fieldId));
    if (field != null) {
        field.style.display = 'none';
    }
}

function disableComponent(fieldId) {
    var field = document.getElementById(getClientId(fieldId));
    if (field != null) {
        field.disabled = true;
    }
}

function getClientId(componentId) {
    var s = document.getElementsByTagName('*');
    var compId = ':' + componentId;
    var id = '';
    for (var i = 0; i < s.length; i++) {
        var pos = s[i].id.lastIndexOf(compId);
        if (pos != -1) {
            if (pos + compId.length == s[i].id.length) {
                id = s[i].id;
            }
        }
    }

    return id;
}