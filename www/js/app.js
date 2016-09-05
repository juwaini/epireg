// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('epireg', ['ionic'])

    .controller('EpiregCtrl', function ($scope, $http, $ionicScrollDelegate, $ionicPopup) {


        ionic.Platform.ready(function(){
            var device = ionic.Platform.device();
            //$scope.epiregForm.device_info.device = device.device;
            $scope.epiregForm.device_info.cordova = device.cordova;
            $scope.epiregForm.device_info.model = device.model;
            $scope.epiregForm.device_info.platform = device.platform;
            $scope.epiregForm.device_info.uuid = device.uuid;
            $scope.epiregForm.device_info.version = device.version;
        });

        $scope.gender = [
            {"key": "M", "value": "Male"},
            {"key": "F", "value": "Female"}
        ];


        $scope.yes_no_unknown = [
            {"key": "Y", "value": "Yes"},
            {"key": "N", "value": "No"},
            {"key": "U", "value": "Unknown"}
        ];

        $scope.seizure_type = [
            {"key": "focal", "value": "Focal"},
            {"key": "generalized", "value": "Generalized"},
            {"key": "unknown", "value": "Unknown"}
        ];

        $scope.aetiology_syndrome = [
            {"key": "genetic", "value": "Genetic"},
            {"key": "structural", "value": "Structural"},
            {"key": "metabolic", "value": "Metabolic"},
            {"key": "cryptogenic", "value": "Cryptogenic"}
        ];

        $scope.anti_epileptic_drug = [
            {"key": "sodium valproate", "value": "Sodium Valproate"},
            {"key": "carbamazepine", "value": "Carbamazepine"},
            {"key": "lamotrigine", "value": "Lamotrigine"},
            {"key": "phenytoin", "value": "Phenytoin"},
            {"key": "phenobarbitone", "value": "Phenobarbitone"},
            {"key": "gabapentin", "value": "Gabapentin"},
            {"key": "pregabalin", "value": "Pregabalin"},
            {"key": "topiramate", "value": "Topiramate"},
            {"key": "clobazam", "value": "Clobazam"},
            {"key": "clonazepam", "value": "Clonazepam"},
            {"key": "levetiracetame", "value": "Levetiracetame"},
            {"key": "lacosamide", "value": "Lacosamide"},
            {"key": "oxcarbamazepine", "value": "Oxcarbamazepine"},
            {"key": "eslicarbamazepine", "value": "Eslicarbamazepine"},
            {"key": "primidone", "value": "Primidone"},
            {"key": "parampanel", "value": "Parampanel"}
        ];

        $scope.formSubmit = function () {
            var url = "http://www.my-node.org/epireg/submit.php";

            $http.post(url, $scope.epiregForm).then(function (res) {
                $scope.showAlert(res.data);
                $scope.formReset();
            });
        };

        $scope.epiregForm = {
            name: '',
            rn: '',
            sex: '',
            race: '',
            age_onset: null,
            year_of_birth: null,
            ictal_phenomenon: '',
            seizure_type: '',
            aetiology_syndrome: '',
            comorbidity_perinatal: '',
            febrile_seizure: '',
            family_history: '',
            eeg: '',
            mri: '',
            other_investigations: '',
            last_seen: '',

            current_aed1: {
                type: '',
                dose: '',
                efficacy_side_effects: ''
            },
            current_aed2: {
                type: '',
                dose: '',
                efficacy_side_effects: ''
            },
            current_aed3: {
                type: '',
                dose: '',
                efficacy_side_effects: ''
            },
            current_aed4: {
                type: '',
                dose: '',
                efficacy_side_effects: ''
            },

            seizure_control: '',

            previous_aed1: {
                type: '',
                dose: '',
                reason: ''
            },

            previous_aed2: {
                type: '',
                dose: '',
                reason: ''
            },

            previous_aed3: {
                type: '',
                dose: '',
                reason: ''
            },

            previous_aed4: {
                type: '',
                dose: '',
                reason: ''
            },

            remarks: '',

            //for device info
            device_info: {
                //device: '',
                cordova: '',
                model: '',
                platform: '',
                uuid: '',
                version: ''
            }
        };

        $scope.formReset = function () {
            $scope.epiregForm.name = "";
            $scope.epiregForm.rn = "";
            $scope.epiregForm.sex = "";
            $scope.epiregForm.race = "";
            $scope.epiregForm.age_onset = null;
            $scope.epiregForm.year_of_birth = null;
            $scope.epiregForm.ictal_phenomenon = "";
            $scope.epiregForm.seizure_type = "";
            $scope.epiregForm.aetiology_syndrome = "";
            $scope.epiregForm.comorbidity_perinatal = "";
            $scope.epiregForm.febrile_seizure = "";
            $scope.epiregForm.family_history = "";
            $scope.epiregForm.eeg = "";
            $scope.epiregForm.mri = "";
            $scope.epiregForm.other_investigations = "";
            $scope.epiregForm.last_seen = "";
            $scope.epiregForm.current_aed1 = {};
            $scope.epiregForm.current_aed2 = {};
            $scope.epiregForm.current_aed3 = {};
            $scope.epiregForm.current_aed4 = {};
            $scope.epiregForm.seizure_control = "";
            $scope.epiregForm.previous_aed1 = {};
            $scope.epiregForm.previous_aed2 = {};
            $scope.epiregForm.previous_aed3 = {};
            $scope.epiregForm.previous_aed4 = {};
            $scope.epiregForm.remarks = "";
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };

        $scope.hint = {
            name: 'Please key in the patient name.',
            rn: 'Please key in the patient registration number.',
            sex: 'Select Sex',
            race: 'Please key in the patient race.',
            age_onset: 'Please key in the patient age.',
            year_of_birth: 'Patient year of birth in YYYY form.',
            ictal_phenomenon: 'Hint for ictal phenomenon.',
            seizure_type: 'Seizure Type',
            aetiology_syndrome: 'Aetiology/Syndrome',
            comorbidity_perinatal: 'Comorbidity/Perinatal',
            febrile_seizure: 'Hint for febrile seizure.',
            family_history: 'Hint for family history.',
            eeg: 'Hint for EEG.',
            mri: 'Hint for MRI',
            other_investigations: 'Hint for other investigations.',

            current_aed1: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                efficacy_side_effects: 'Any side effects?'
            },
            current_aed2: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                efficacy_side_effects: 'Any side effects?'
            },
            current_aed3: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                efficacy_side_effects: 'Any side effects?'
            },
            current_aed4: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                efficacy_side_effects: 'Any side effects?'
            },

            seizure_control: 'Hint for seizure control.',

            previous_aed1: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                reason: 'Reason to administer.'
            },

            previous_aed2: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                reason: 'Reason to administer.'
            },

            previous_aed3: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                reason: 'Reason to administer.'
            },

            previous_aed4: {
                type: 'AED Type',
                dose: 'Dose in ml.',
                reason: 'Reason to administer.'
            },

            remarks: 'Hint for remarks.'
        };

        // An alert dialog
        $scope.showAlert = function(message) {
            var alertPopup = $ionicPopup.alert({
                title: 'Data saved!',
                template: message
            });
            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
    });
