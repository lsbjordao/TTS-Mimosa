// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa guanchezii
const Mimosa_guanchezii = new Mimosa()
Mimosa_guanchezii.specificEpithet = 'guanchezii'

Mimosa_guanchezii.stems = new Stems()

Mimosa_guanchezii.stipule = new Stipule()
Mimosa_guanchezii.stipule.margin = new MarginStipule()
Mimosa_guanchezii.stipule.adaxial = new AdaxialStipule()
Mimosa_guanchezii.stipule.abaxial = new AbaxialStipule()

Mimosa_guanchezii.leaf = new Leaf()
Mimosa_guanchezii.leaf.petiole = new Petiole()
Mimosa_guanchezii.leaf.bipinnate = new Bipinnate()
Mimosa_guanchezii.leaf.bipinnate.rachis = new Rachis()
Mimosa_guanchezii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guanchezii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guanchezii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_guanchezii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_guanchezii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guanchezii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guanchezii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guanchezii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(28, 42)
Mimosa_guanchezii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guanchezii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guanchezii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guanchezii.inflorescence = new Inflorescence()
Mimosa_guanchezii.inflorescence.peduncle = new Peduncle()
Mimosa_guanchezii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_guanchezii.flower = new Flower()
Mimosa_guanchezii.flower.bracteole = new Bracteole()
Mimosa_guanchezii.flower.merism = '4-merous'
Mimosa_guanchezii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_guanchezii.flower.calyx = new Calyx()
Mimosa_guanchezii.flower.calyx.shape = 'campanulate'
Mimosa_guanchezii.flower.corolla = new Corolla()

Mimosa_guanchezii.androecium = new Androecium()
Mimosa_guanchezii.androecium.filaments = new Filaments()

Mimosa_guanchezii.ginoecium = new Ginoecium()
Mimosa_guanchezii.ginoecium.ovary = new Ovary()

Mimosa_guanchezii.fruit = new Fruit()
Mimosa_guanchezii.fruit.stipe = new Stipe()
Mimosa_guanchezii.fruit.replum = new Replum()
Mimosa_guanchezii.fruit.epicarp = new Epicarp()

Mimosa_guanchezii.seed = new Seed()


// Description authorship
Mimosa_guanchezii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guanchezii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guanchezii
export { Mimosa_guanchezii }