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


// Description of Mimosa turneri
const Mimosa_turneri = new Mimosa()
Mimosa_turneri.specificEpithet = 'turneri'

Mimosa_turneri.stems = new Stems()

Mimosa_turneri.stipule = new Stipule()
Mimosa_turneri.stipule.margin = new MarginStipule()
Mimosa_turneri.stipule.adaxial = new AdaxialStipule()
Mimosa_turneri.stipule.abaxial = new AbaxialStipule()

Mimosa_turneri.leaf = new Leaf()
Mimosa_turneri.leaf.petiole = new Petiole()
Mimosa_turneri.leaf.bipinnate = new Bipinnate()
Mimosa_turneri.leaf.bipinnate.rachis = new Rachis()
Mimosa_turneri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_turneri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_turneri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_turneri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_turneri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_turneri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 18)
Mimosa_turneri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_turneri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_turneri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_turneri.inflorescence = new Inflorescence()
Mimosa_turneri.inflorescence.peduncle = new Peduncle()
Mimosa_turneri.inflorescence.capitate = new CapitateInflorescence()

Mimosa_turneri.flower = new Flower()
Mimosa_turneri.flower.bracteole = new Bracteole()
Mimosa_turneri.flower.calyx = new Calyx()
Mimosa_turneri.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_turneri.flower.corolla = new Corolla()

Mimosa_turneri.androecium = new Androecium()
Mimosa_turneri.androecium.filaments = new Filaments()
Mimosa_turneri.androecium.filaments.colour = 'pinkish'

Mimosa_turneri.ginoecium = new Ginoecium()
Mimosa_turneri.ginoecium.ovary = new Ovary()

Mimosa_turneri.fruit = new Fruit()
Mimosa_turneri.fruit.stipe = new Stipe()
Mimosa_turneri.fruit.replum = new Replum()
Mimosa_turneri.fruit.epicarp = new Epicarp()

Mimosa_turneri.seed = new Seed()


// Description authorship
Mimosa_turneri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_turneri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa turneri
export { Mimosa_turneri }