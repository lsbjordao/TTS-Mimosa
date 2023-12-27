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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa guirocobensis
const Mimosa_guirocobensis = new Mimosa()
Mimosa_guirocobensis.specificEpithet = 'guirocobensis'

Mimosa_guirocobensis.stems = new Stems()

Mimosa_guirocobensis.stipule = new Stipule()
Mimosa_guirocobensis.stipule.margin = new MarginStipule()
Mimosa_guirocobensis.stipule.adaxial = new AdaxialStipule()
Mimosa_guirocobensis.stipule.abaxial = new AbaxialStipule()

Mimosa_guirocobensis.leaf = new Leaf()
Mimosa_guirocobensis.leaf.petiole = new Petiole()
Mimosa_guirocobensis.leaf.bipinnate = new Bipinnate()
Mimosa_guirocobensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_guirocobensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_guirocobensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_guirocobensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_guirocobensis.inflorescence = new Inflorescence()
Mimosa_guirocobensis.inflorescence.peduncle = new Peduncle()
Mimosa_guirocobensis.inflorescence.spicate = new Spicate()

Mimosa_guirocobensis.flower = new Flower()
Mimosa_guirocobensis.flower.bracteole = new Bracteole()
Mimosa_guirocobensis.flower.merism = '5-merous'
Mimosa_guirocobensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_guirocobensis.flower.calyx = new Calyx()
Mimosa_guirocobensis.flower.calyx.shape = 'turbinate'
Mimosa_guirocobensis.flower.corolla = new Corolla()
Mimosa_guirocobensis.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_guirocobensis.androecium = new Androecium()
Mimosa_guirocobensis.androecium.filaments = new Filaments()

Mimosa_guirocobensis.ginoecium = new Ginoecium()
Mimosa_guirocobensis.ginoecium.ovary = new Ovary()

Mimosa_guirocobensis.fruit = new Fruit()
Mimosa_guirocobensis.fruit.stipe = new Stipe()
Mimosa_guirocobensis.fruit.replum = new Replum()
Mimosa_guirocobensis.fruit.epicarp = new Epicarp()

Mimosa_guirocobensis.seed = new Seed()


// Description authorship
Mimosa_guirocobensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_guirocobensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa guirocobensis
export { Mimosa_guirocobensis }