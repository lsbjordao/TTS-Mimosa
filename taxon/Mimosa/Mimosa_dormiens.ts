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


// Description of Mimosa dormiens
const Mimosa_dormiens = new Mimosa()
Mimosa_dormiens.specificEpithet = 'dormiens'

Mimosa_dormiens.stems = new Stems()

Mimosa_dormiens.stipule = new Stipule()
Mimosa_dormiens.stipule.margin = new MarginStipule()
Mimosa_dormiens.stipule.adaxial = new AdaxialStipule()
Mimosa_dormiens.stipule.abaxial = new AbaxialStipule()

Mimosa_dormiens.leaf = new Leaf()
Mimosa_dormiens.leaf.petiole = new Petiole()
Mimosa_dormiens.leaf.bipinnate = new Bipinnate()
Mimosa_dormiens.leaf.bipinnate.rachis = new Rachis()
Mimosa_dormiens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dormiens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dormiens.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_dormiens.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_dormiens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dormiens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dormiens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dormiens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 8)
Mimosa_dormiens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dormiens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dormiens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dormiens.inflorescence = new Inflorescence()
Mimosa_dormiens.inflorescence.peduncle = new Peduncle()
Mimosa_dormiens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dormiens.flower = new Flower()
Mimosa_dormiens.flower.bracteole = new Bracteole()
Mimosa_dormiens.flower.merism = '4-merous'
Mimosa_dormiens.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_dormiens.flower.calyx = new Calyx()
Mimosa_dormiens.flower.corolla = new Corolla()
Mimosa_dormiens.flower.corolla.shape = 'campanulate'

Mimosa_dormiens.androecium = new Androecium()
Mimosa_dormiens.androecium.filaments = new Filaments()

Mimosa_dormiens.ginoecium = new Ginoecium()
Mimosa_dormiens.ginoecium.ovary = new Ovary()

Mimosa_dormiens.fruit = new Fruit()
Mimosa_dormiens.fruit.stipe = new Stipe()
Mimosa_dormiens.fruit.replum = new Replum()
Mimosa_dormiens.fruit.epicarp = new Epicarp()

Mimosa_dormiens.seed = new Seed()


// Description authorship
Mimosa_dormiens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dormiens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dormiens
export { Mimosa_dormiens }